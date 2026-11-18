// server.js
const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const url = require('url');
const crypto = require('crypto');

const PORT = 3000;
const SECRET = 'my_secret_key';

const activeTokens = new Map();

const mime = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer(async (req, res) => {
  const parsed = url.parse(req.url);
  const pathname = parsed.pathname;
  console.log(`Received request for path: ${pathname} Method: ${req.method}`);

  const tryHtmlPath = (p) => {
    if (!path.extname(p)) return p + '.html';
    return p;
  };

  const hashPassword = (password) => {
    return crypto.createHmac('sha256', SECRET).update(password).digest('hex');
  };

  const generateToken = () => {
    return crypto.randomBytes(32).toString('hex');
  };

  // Новый эндпоинт для логирования сообщений
  if (pathname === '/api/send-email' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', async () => {
      try {
        const { name, email, message } = JSON.parse(body);

        if (!name || !email || !message) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing required fields' }));
          return;
        }

        const messageData = {
          timestamp: new Date().toISOString(),
          name,
          email,
          message,
        };

        const filePath = path.join(__dirname, 'messages.json');
        let messages = [];
        try {
          const fileContent = await fs.readFile(filePath, 'utf8');
          messages = JSON.parse(fileContent || '[]'); // Если файла нет, начинаем с пустого массива
        } catch (err) {
          console.warn('messages.json not found, creating new:', err);
        }

        messages.push(messageData);
        await fs.writeFile(filePath, JSON.stringify(messages, null, 2)); // Сохранение с отступами для читаемости

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Повідомлення збережено' }));
      } catch (err) {
        console.error('Error processing send-email:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Помилка сервера' }));
      }
    });
    return;
  }

  if (pathname === '/comments.json' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'comments.json');
    try {
      const data = await fs.readFile(filePath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    } catch (err) {
      console.error('Error reading comments.json:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Unable to read comments' }));
    }
    return;
  }

  if (pathname === '/comments.json' && req.method === 'POST') {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Unauthorized' }));
      return;
    }

    const token = authHeader.split(' ')[1];
    const user = activeTokens.get(token);
    if (!user || user.expires < Date.now()) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid or expired token' }));
      return;
    }

    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', async () => {
      try {
        const { perfumeId, comment } = JSON.parse(body);
        if (!perfumeId || !comment || !comment.text || !comment.date || !Number.isInteger(comment.rating) || comment.rating < 1 || comment.rating > 5) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid comment data or rating' }));
          return;
        }

        comment.author = user.name;
        const filePath = path.join(__dirname, 'comments.json');
        let comments = {};
        try {
          comments = JSON.parse(await fs.readFile(filePath, 'utf8') || '{}');
        } catch (err) {
          console.warn('comments.json not found, creating new:', err);
        }

        if (!comments[perfumeId]) comments[perfumeId] = [];
        comments[perfumeId].push(comment);

        await fs.writeFile(filePath, JSON.stringify(comments, null, 2));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        console.error('Error saving comment:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Unable to save comment' }));
      }
    });
    return;
  }

  if (pathname === '/register' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', async () => {
      try {
        console.log('Received register request with body:', body);
        const { email, password, confirmPassword, name, surname, referer } = JSON.parse(body);
        if (!email || !password || !confirmPassword || !name || !surname) {
          console.log('Missing required fields:', { email, password, confirmPassword, name, surname });
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing required fields' }));
          return;
        }
        if (password !== confirmPassword) {
          console.log('Passwords do not match');
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Passwords do not match' }));
          return;
        }

        const filePath = path.join(__dirname, 'users.json');
        let users = { users: [] };
        try {
          const fileContent = await fs.readFile(filePath, 'utf8');
          users = JSON.parse(fileContent || '{ "users": [] }');
          console.log('Read users.json:', users);
        } catch (err) {
          console.warn('users.json not found or invalid, creating new:', err);
          users = { users: [] };
        }

        if (users.users.find(u => u.email === email)) {
          console.log('User already exists:', email);
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'User already exists' }));
          return;
        }

        const hashedPassword = hashPassword(password);
        users.users.push({ email, password: hashedPassword, name, surname });
        await fs.writeFile(filePath, JSON.stringify(users, null, 2));
        console.log('User registered:', { email, name, surname });

        const token = generateToken();
        activeTokens.set(token, {
          email,
          name,
          surname,
          expires: Date.now() + 60 * 60 * 1000,
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, token, name, surname, referer }));
      } catch (err) {
        console.error('Error registering user:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Unable to register user', details: err.message }));
      }
    });
    return;
  }

  if (pathname === '/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', async () => {
      try {
        const { email, password, referer } = JSON.parse(body);
        if (!email || !password) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing required fields' }));
          return;
        }

        const filePath = path.join(__dirname, 'users.json');
        let users = { users: [] };
        try {
          users = JSON.parse(await fs.readFile(filePath, 'utf8') || '{ "users": [] }');
        } catch (err) {
          console.warn('users.json not found:', err);
        }

        const user = users.users.find(u => u.email === email);
        if (!user || user.password !== hashPassword(password)) {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid credentials' }));
          return;
        }

        const token = generateToken();
        activeTokens.set(token, {
          email: user.email,
          name: user.name,
          surname: user.surname,
          expires: Date.now() + 60 * 60 * 1000,
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, token, name: user.name, surname: user.surname, referer }));
      } catch (err) {
        console.error('Error logging in:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Unable to login' }));
      }
    });
    return;
  }

  if (pathname === '/user' && req.method === 'GET') {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Unauthorized' }));
      return;
    }

    const token = authHeader.split(' ')[1];
    const user = activeTokens.get(token);
    if (!user || user.expires < Date.now()) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid or expired token' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ email: user.email, name: user.name, surname: user.surname }));
    return;
  }

  let filePath = path.join(__dirname, 'public', tryHtmlPath(pathname));
  console.log(`Trying to read file: ${filePath}`);

  try {
    const stats = await fs.stat(filePath);
    if (stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
      const data = await fs.readFile(filePath);
      res.end(data);
      return;
    }
  } catch (err) {
    console.log(`File not found or not a file: ${filePath}`);
  }

  if (/^\/perfume(\/[^\/]+)?$/.test(pathname)) {
    const perfumePath = path.join(__dirname, 'public', 'perfume.html');
    try {
      const data = await fs.readFile(perfumePath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
      return;
    } catch (err) {
      console.error('Error reading perfume.html:', err);
    }
  }

  if (pathname === '/auth' && req.method === 'GET') {
    const authPath = path.join(__dirname, 'public', 'auth.html');
    try {
      const data = await fs.readFile(authPath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
      return;
    } catch (err) {
      console.error('Error reading auth.html:', err);
    }
  }

  const p404 = path.join(__dirname, 'public', '404.html');
  try {
    const data = await fs.readFile(p404);
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(data);
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/index.html`);
});