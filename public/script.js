function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

async function loadDataJson() {
  try {
    const response = await fetch('data.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Не удалось загрузить data.json');
    return await response.json();
  } catch (error) {
    console.error('Ошибка загрузки data.json:', error);
    return null;
  }
}

async function loadAliasesJson() {
  try {
    const response = await fetch('aliases.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Не удалось загрузить aliases.json');
    return await response.json();
  } catch (error) {
    console.error('Ошибка загрузки aliases.json:', error);
    return null;
  }
}

function normalizeType(type) {
  return type.trim().toLowerCase().replace(/\s+/g, ' ');
}

const typeMapping = {
  'парфумована вода': 'Eau de Parfum',
  'туалетна вода': 'Eau de Toilette',
  'парфуми': 'Parfum',
  'одеколон': 'Eau de Cologne',
  'еліксир': 'Elixir',
  '': ''
};

async function collectProductData(perfumeId, data) {
  const perfume = perfumes[perfumeId];
  if (!perfume) {
    console.warn(`Парфюм с ID ${perfumeId} не найден в perfumes`);
    return null;
  }

  const perfumeType = perfume.type ? normalizeType(perfume.type) : '';
  console.log(`perfumeId: ${perfumeId}, perfumeType: ${perfumeType}`);

  const aliases = await loadAliasesJson();
  if (!aliases) {
    console.error('Не удалось загрузить aliases.json');
    return null;
  }

  const storeIds = aliases[perfumeId] || [];
  console.log(`Парфюм: ${perfumeId}, storeIds:`, storeIds);

  if (storeIds.length === 0) {
    console.warn(`Для парфюма ${perfumeId} не найдены store IDs в aliases.json`);
    return null;
  }

  let allSites = {};
  storeIds.forEach(storeId => {
    const productData = data[storeId];
    console.log(`storeId: ${storeId}, данные:`, productData);

    if (productData && productData.variations && productData.variations.length > 0) {
      const parfumType = productData.parfumType ? normalizeType(productData.parfumType) : '';
      const mappedParfumType = typeMapping[parfumType] || parfumType;
      console.log(`storeId: ${storeId}, parfumType: ${parfumType}, mappedParfumType: ${mappedParfumType}`);

      if (storeIds.includes(storeId)) {
        if (perfumeType && mappedParfumType && mappedParfumType !== perfumeType) {
          console.warn(
            `Типы не совпадают для ${storeId}: ` +
            `data.json type: ${mappedParfumType}, data.js type: ${perfumeType}. Данные всё равно добавлены.`
          );
        }

        allSites[productData.site] = {
          url: productData.variations[0]?.url || '#',
          variations: productData.variations || []
        };
        console.log(`Добавлен сайт ${productData.site} для ${perfumeId}, variations:`, productData.variations);
      } else {
        console.log(`Пропущен storeId ${storeId}: не найден в aliases для ${perfumeId}`);
      }
    } else {
      console.log(`Пропущен storeId ${storeId}: данные отсутствуют или нет вариаций в data.json`);
    }
  });

  if (Object.keys(allSites).length === 0) {
    console.warn(`Не найдено сайтов с валидными данными для парфюма ${perfumeId}`);
    return null;
  }

  return {
    parfumType: perfume.type,
    fullName: perfume.fullName,
    sites: allSites
  };
}

async function updateVariationsAndPrice() {
  const id = getQueryParam('id');
  console.log('ID из URL:', id);

  const sizeContainer = document.querySelector('#size-buttons');
  const priceElem = document.querySelector('#price-info');
  const siteContainer = document.querySelector('#site-buttons');
  const unpackedMessage = document.querySelector('#unpacked-message');

  if (!id || !sizeContainer || !priceElem || !siteContainer) {
    console.error('ID не указан или DOM-элементы не найдены');
    priceElem.innerHTML = `<span style="color:#999">Немає в наявності</span>`;
    siteContainer.innerHTML = '';
    sizeContainer.innerHTML = '';
    return;
  }

  const data = await loadDataJson();
  if (!data) {
    priceElem.innerHTML = `<span style="color:#999">Немає в наявності</span>`;
    siteContainer.innerHTML = '';
    sizeContainer.innerHTML = '';
    return;
  }

  const productData = await collectProductData(id, data);
  if (!productData || !productData.sites || Object.keys(productData.sites).length === 0) {
    console.warn(`Нет данных о сайтах для парфюма ${id}`);
    priceElem.innerHTML = `<span style="color:#999">Немає в наявності</span>`;
    siteContainer.innerHTML = '';
    sizeContainer.innerHTML = '';
    return;
  }

  const sites = Object.keys(productData.sites);
  const hasValidVariations = sites.some(site => {
    const variations = productData.sites[site].variations || [];
    return variations.some(v => v.size && (v.price || v.defaultPrice));
  });

  siteContainer.innerHTML = '';
  if (!hasValidVariations) {
    console.warn(`Нет валидных вариаций для парфюма ${id}`);
    priceElem.innerHTML = `<span style="color:#999">Немає в наявності</span>`;
    sizeContainer.innerHTML = '';
    if (unpackedMessage) {
      unpackedMessage.style.display = 'none';
      unpackedMessage.textContent = '';
    }
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'site-selector-container';
  const select = document.createElement('select');
  select.className = 'site-selector';
  select.setAttribute('aria-label', 'Выберите магазин');
  sites.forEach(site => {
    const option = document.createElement('option');
    option.value = site;
    option.textContent = site.charAt(0).toUpperCase() + site.slice(1);
    select.appendChild(option);
  });
  wrapper.appendChild(select);
  siteContainer.appendChild(wrapper);

  select.addEventListener('focus', () => wrapper.classList.add('active'));
  select.addEventListener('blur', () => wrapper.classList.remove('active'));

  let selectedSite = sites.find(site => {
    const variations = productData.sites[site].variations || [];
    return variations.some(v => v.size && (v.price || v.defaultPrice));
  }) || sites[0];
  let selectedIndex = 0;

  function renderVariations() {
    const variations = productData.sites[selectedSite]?.variations || [];
    const validVariations = variations.filter(v => v.size && (v.price || v.defaultPrice));
    sizeContainer.innerHTML = '';
    if (validVariations.length === 0) {
      priceElem.innerHTML = `<span style="color:#999">Немає в наявності</span>`;
      if (unpackedMessage) {
        unpackedMessage.style.display = 'none';
        unpackedMessage.textContent = '';
      }
      return;
    }
    validVariations.forEach((v, i) => {
      const btn = document.createElement('button');
      btn.className = 'size-btn';
      btn.textContent = v.size || '—';
      if (v.unpacked && v.unpacked !== 'Новий') btn.classList.add('unpacked');
      if (i === selectedIndex) btn.classList.add('active');
      btn.addEventListener('click', () => {
        selectedIndex = i;
        renderPrice();
        renderSizeButtons();
        if (unpackedMessage) {
          unpackedMessage.style.display = v.unpacked && v.unpacked !== 'Новий' ? 'block' : 'none';
          unpackedMessage.textContent = v.unpacked && v.unpacked !== 'Новий' ? v.unpacked : '';
        }
      });
      sizeContainer.appendChild(btn);
    });
    renderPrice();
  }

  function renderSizeButtons() {
    Array.from(sizeContainer.children).forEach((b, i) => {
      b.classList.toggle('active', i === selectedIndex);
    });
  }

  function renderPrice() {
    const variations = productData.sites[selectedSite]?.variations || [];
    const validVariations = variations.filter(v => v.size && (v.price || v.defaultPrice));
    if (validVariations.length === 0) {
      priceElem.innerHTML = `<span style="color:#999">Немає в наявності</span>`;
      if (unpackedMessage) {
        unpackedMessage.style.display = 'none';
        unpackedMessage.textContent = '';
      }
      return;
    }
    const v = validVariations[selectedIndex];
    if (!v) {
      priceElem.innerHTML = `<span style="color:#999">Немає в наявності</span>`;
      if (unpackedMessage) {
        unpackedMessage.style.display = 'none';
        unpackedMessage.textContent = '';
      }
      return;
    }
    if (v.discountPrice && v.defaultPrice) {
      priceElem.innerHTML = `<span class="discount">${v.discountPrice}</span> <span class="original"><s>${v.defaultPrice}</s></span>`;
    } else {
      priceElem.innerHTML = `<span>${v.price || v.defaultPrice || 'Немає в наявності'}</span>`;
    }
    if (unpackedMessage) {
      unpackedMessage.style.display = v.unpacked && v.unpacked !== 'Новий' ? 'block' : 'none';
      unpackedMessage.textContent = v.unpacked && v.unpacked !== 'Новий' ? v.unpacked : '';
    }
  }

  siteContainer.querySelector('.site-selector')?.addEventListener('change', (e) => {
    selectedSite = e.target.value;
    selectedIndex = 0;
    renderVariations();
  });

  renderVariations();
}

async function checkAuth() {
  const token = localStorage.getItem('authToken');
  if (!token) return null;

  try {
    const response = await fetch('/user', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!response.ok) {
      localStorage.removeItem('authToken');
      return null;
    }
    return await response.json();
  } catch (err) {
    console.error('Помилка перевірки авторизації:', err);
    localStorage.removeItem('authToken');
    return null;
  }
}

async function renderAuthButton() {
  const container = document.getElementById('auth-button-container');
  if (!container) return;

  const user = await checkAuth();
  container.innerHTML = '';

  if (user) {
    const button = document.createElement('button');
    button.className = 'user-menu-button';
    button.textContent = user.name;
    const menu = document.createElement('div');
    menu.className = 'user-menu';
    menu.innerHTML = `
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Ім'я:</strong> ${user.name}</p>
      <p><strong>Прізвище:</strong> ${user.surname}</p>
      <button class="logout-button">Вийти з облікового запису</button>
    `;
    container.appendChild(button);
    container.appendChild(menu);

    button.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    menu.querySelector('.logout-button').addEventListener('click', () => {
      localStorage.removeItem('authToken');
      window.location.reload();
    });

    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) {
        menu.classList.remove('active');
      }
    });
  } else {
    const button = document.createElement('button');
    button.className = 'auth-button';
    button.textContent = 'Зареєструватися';
    button.addEventListener('click', () => {
      window.location.href = `/auth?referer=${encodeURIComponent(window.location.pathname + window.location.search)}`;
    });
    container.appendChild(button);
  }
}

function saveRecentlyViewed(id) {
  if (!id || !perfumes[id]) return;
  let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
  recentlyViewed = recentlyViewed.filter(rid => rid !== id && perfumes[rid]);
  recentlyViewed.unshift(id);
  recentlyViewed = recentlyViewed.slice(0, 4);
  localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
}

function renderRecentlyViewed() {
  const container = document.querySelector('#recently-viewed .recently-viewed-grid');
  if (!container) return;

  const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
  container.innerHTML = '';

  if (recentlyViewed.length === 0) {
    container.innerHTML = '<p>Немає нещодавно переглянутих парфумів</p>';
    return;
  }

  recentlyViewed.forEach(id => {
    const p = perfumes[id];
    if (!p) return;
    const card = document.createElement('div');
    card.className = 'perfume-card';
    card.innerHTML = `
      <a href="perfume.html?id=${id}">
        <img src="${Array.isArray(p.image) ? p.image[0] : p.image}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>${p.brand}</p>
      </a>
    `;
    container.appendChild(card);
  });
}

async function renderComments() {
  const commentsSection = document.getElementById('perfume-comments');
  const commentsList = document.getElementById('comments-list');
  const formContainer = document.getElementById('comment-form-container');
  if (!commentsSection || !commentsList || !formContainer) return;

  const id = getQueryParam('id');
  if (!id) return;

  const user = await checkAuth();

  try {
    const response = await fetch('/comments.json');
    const comments = await response.json();

    commentsList.innerHTML = comments[id] ? comments[id].map(comment => `
      <div class="comment">
        <div class="comment-header">
          <span class="comment-author">${comment.author}</span>
          <span class="comment-date">${new Date(comment.date).toLocaleString('uk-UA')}</span>
        </div>
        <div class="comment-rating">${'⭐'.repeat(comment.rating || 0)} (${comment.rating || 0}/5)</div>
        <p class="comment-text">${comment.text}</p>
      </div>
    `).join('') : `
      <div class="no-comments">
        <p>Ще немає коментарів</p>
        <p>Будьте першим, хто залишить відгук про цей парфум!</p>
      </div>
    `;

    formContainer.innerHTML = user ? `
      <div class="comment-form">
        <div class="rating-selector">
          <label>Оцінка:</label>
          <div class="stars">
            ${[1, 2, 3, 4, 5].map(i => `
              <span class="star" data-value="${i}">${i <= 5 ? '☆' : ''}</span>
            `).join('')}
          </div>
        </div>
        <textarea id="comment-text" placeholder="Ваш коментар..." required></textarea>
        <button id="submit-comment">Додати коментар</button>
      </div>
    ` : `
      <p>Увійдіть, щоб залишити коментар</p>
      <button class="auth-button" onclick="window.location.href='/auth?referer=${encodeURIComponent(window.location.pathname + window.location.search)}'">Увійти</button>
    `;

    if (user) {
      let selectedRating = 0;
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
        star.addEventListener('click', () => {
          selectedRating = parseInt(star.getAttribute('data-value'));
          stars.forEach(s => {
            s.textContent = parseInt(s.getAttribute('data-value')) <= selectedRating ? '★' : '☆';
          });
        });
      });

      document.getElementById('submit-comment').addEventListener('click', async () => {
        const text = document.getElementById('comment-text').value.trim();
        if (!text) {
          alert('Введіть текст коментаря');
          return;
        }
        if (selectedRating === 0) {
          alert('Виберіть оцінку');
          return;
        }

        try {
          const response = await fetch('/comments.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            },
            body: JSON.stringify({
              perfumeId: id,
              comment: {
                text,
                rating: selectedRating,
                date: new Date().toISOString(),
                author: user.name
              }
            })
          });
          if (!response.ok) {
            const data = await response.json();
            alert(data.error || 'Помилка додавання коментаря');
            return;
          }
          renderComments();
          document.getElementById('comment-text').value = '';
          stars.forEach(s => (s.textContent = '☆'));
          selectedRating = 0;
        } catch (err) {
          console.error('Помилка додавання коментаря:', err);
          alert('Помилка сервера');
        }
      });
    }
  } catch (err) {
    console.error('Помилка завантаження коментарів:', err);
    commentsList.innerHTML = '<p>Помилка завантаження коментарів</p>';
  }
}

function displayPerfumeInfo() {
  const id = getQueryParam('id');
  if (!id || !perfumes[id]) {
    console.error('Парфум не знайдено:', id);
    window.location.href = '/404.html';
    return;
  }

  saveRecentlyViewed(id);

  const p = perfumes[id];
  document.title = p.name;
  const imgMain = document.querySelector('.product-image img');
  const thumbnailContainer = document.getElementById('thumbnail-container');
  const sliderLeft = document.getElementById('slider-left');
  const sliderRight = document.getElementById('slider-right');

  if (Array.isArray(p.image) && p.image.length > 0) {
    imgMain.src = p.image[0];
    imgMain.alt = p.name;

    let currentIndex = 0;
    const totalImages = p.image.length;
    const maxVisible = Math.min(4, totalImages);

    function updateThumbnails() {
      thumbnailContainer.innerHTML = '';
      const startIndex = Math.max(0, Math.min(currentIndex - Math.floor(maxVisible / 2), totalImages - maxVisible));
      for (let i = startIndex; i < startIndex + maxVisible && i < totalImages; i++) {
        const img = document.createElement('img');
        img.src = p.image[i];
        img.alt = p.name;
        img.className = 'thumbnail';
        if (i === currentIndex) {
          img.classList.add('active');
        }
        img.addEventListener('click', () => {
          currentIndex = i;
          imgMain.src = p.image[i];
          updateThumbnails();
        });
        thumbnailContainer.appendChild(img);
      }

      sliderLeft.disabled = currentIndex === 0;
      sliderRight.disabled = currentIndex === totalImages - 1;
    }

    sliderLeft.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        imgMain.src = p.image[currentIndex];
        updateThumbnails();
      }
    });

    sliderRight.addEventListener('click', () => {
      if (currentIndex < totalImages - 1) {
        currentIndex++;
        imgMain.src = p.image[currentIndex];
        updateThumbnails();
      }
    });

    updateThumbnails();
  } else {
    imgMain.src = p.image || 'default-image.jpg';
    imgMain.alt = p.name;
    thumbnailContainer.innerHTML = '';
    sliderLeft.style.display = 'none';
    sliderRight.style.display = 'none';
  }

  const info = document.querySelector('.product-info');
  info.innerHTML = `
    <h1>${p.name}</h1>
    ${p.brand ? `<h3><strong>Бренд:</strong> ${p.brand}</h3>` : ``}
    ${p.line ? `<p><strong>Лінійка:</strong> ${p.line}</p>` : ``}
    ${p.gender ? `<p><strong>Стать:</strong> ${p.gender}</p>` : ``}
    ${p.year ? `<p><strong>Рік:</strong> ${p.year}</p>` : ``}
    ${p.type ? `<p><strong>Тип:</strong> ${p.type}</p>` : ``}
    ${p.group ? `<p><strong>Група аромату:</strong> ${p.group}</p>` : ``}
    ${p.sillage ? `<p><strong>Шлейфовість:</strong> ${p.sillage}</p>` : ``}
    ${p.description ? `<p><strong>Опис:</strong> ${p.description}</p>` : ``}
    ${p.rating != null ? `
      <h3>Рейтинг</h3>
      <div class="rating">${'⭐'.repeat(Math.round(p.rating))} (${p.rating}/5)</div>` : ``}
  `;

  const notesC = document.querySelector('.notes');
  notesC.innerHTML = '';
  for (const [grp, arr] of Object.entries(p.notes)) {
    const sec = document.createElement('div');
    sec.innerHTML = `<h3 style="text-align:center">${grp}</h3>`;
    const row = document.createElement('div');
    row.className = 'note-row';
    arr.forEach(e => {
      const imgSrc = notesData[e]?.image || '';
      const item = document.createElement('div');
      item.className = 'note-item';
      const img = document.createElement('img');
      img.className = 'note-image';
      img.src = imgSrc;
      img.alt = e;
      img.addEventListener('mouseenter', () => (img.style.boxShadow = '0 0 8px 3px rgba(127,140,232,0.8)'));
      img.addEventListener('mouseleave', () => (img.style.boxShadow = ''));
      img.addEventListener('click', () => openNoteModal(e));
      const lbl = document.createElement('span');
      lbl.className = 'note-name';
      lbl.textContent = e;
      item.append(img, lbl);
      row.appendChild(item);
    });
    sec.appendChild(row);
    notesC.appendChild(sec);
  }

  const gal = document.getElementById('perfume-gallery');
  if (p.images?.length) {
    gal.innerHTML = `<h3 style="text-align:center">Додаткові фото</h3>`;
    const gr = document.createElement('div');
    gr.className = 'gallery-row';
    p.images.forEach(src => {
      const img = document.createElement('img');
      img.className = 'gallery-image';
      img.src = src;
      img.alt = p.name;
      img.addEventListener('click', () => {
        const ov = document.createElement('div');
        ov.className = 'lightbox-overlay';
        const full = document.createElement('img');
        full.className = 'lightbox-image';
        full.src = src;
        ov.appendChild(full);
        document.body.appendChild(ov);
        ov.addEventListener('click', () => ov.remove());
      });
      gr.appendChild(img);
    });
    gal.appendChild(gr);
  }

  const extra = document.getElementById('perfume-extra-info');
  if (extra) {
    const blockB = document.createElement('div');
    blockB.className = 'block';
    blockB.innerHTML = `
      <h3>Підходить для</h3>
      <div class="seasons"></div>
      <div class="daytime"></div>
    `;
    const sd = document.createElement('div');
    sd.className = 'seasons';
    const dd = document.createElement('div');
    dd.className = 'daytime';
    const seasonEmojis = { spring: '🌸 Весна', summer: '☀️ Літо', autumn: '🍂 Осінь', winter: '❄️ Зима' };
    const timeEmojis = { day: '🌞 День', night: '🌙 Ніч' };
    Object.entries(seasonEmojis).forEach(([k, label]) => {
      const span = document.createElement('span');
      span.className = 'season-item';
      span.textContent = label;
      span.setAttribute('data-stars', '⭐'.repeat(Math.round(p.season?.[k] || 0)));
      sd.appendChild(span);
    });
    Object.entries(timeEmojis).forEach(([k, label]) => {
      const span = document.createElement('span');
      span.className = 'time-item';
      span.textContent = label;
      span.setAttribute('data-stars', '⭐'.repeat(Math.round(p.daytime?.[k] || 0)));
      dd.appendChild(span);
    });
    blockB.appendChild(sd);
    blockB.appendChild(dd);
    extra.appendChild(blockB);
  }

  const relSec = document.getElementById('perfume-related');
  const relIds = brands[p.brand]?.filter(x => x !== id) || [];
  if (relSec && relIds.length) {
    relSec.innerHTML = `<h3>Інші аромати ${p.brand}</h3>`;
    const grid = document.createElement('div');
    grid.className = 'related-grid';
    relIds.forEach(rid => {
      const d = perfumes[rid];
      if (!d) return;
      const a = document.createElement('a');
      a.href = `perfume.html?id=${rid}`;
      a.className = 'perfume-card';
      a.innerHTML = `<img src="${Array.isArray(d.image) ? d.image[0] : d.image}" alt="${d.name}"><span>${d.name}</span>`;
      grid.appendChild(a);
    });
    relSec.appendChild(grid);
  }

  const shopsC = document.getElementById('perfume-shops');
  if (shopsC && p.shops?.length) {
    shopsC.innerHTML = `<h3>Де придбати</h3>`;
    p.shops.forEach(sh => {
      const a = document.createElement('a');
      a.href = sh.url;
      a.target = '_blank';
      a.className = 'shop-btn';
      a.innerHTML = `<img src="${sh.logo}" alt="${sh.name}"><span>${sh.name}</span>`;
      shopsC.appendChild(a);
    });
  }
}

function openNoteModal(note) {
  const modal = document.createElement('div');
  modal.className = 'note-modal';
  modal.innerHTML = `
    <div class="note-modal-content">
      <span class="note-modal-close">×</span>
      <img src="${notesData[note]?.image || ''}" alt="${note}">
      <h3>${note}</h3>
      <p>${notesData[note]?.description || 'Опис відсутній'}</p>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector('.note-modal-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

(() => {
  const input = document.getElementById('search-input');
  const box = document.getElementById('search-suggestions');
  const all = Object.entries(perfumes).map(([id, p]) => {
    const fullName = p.fullName || p.name;
    let image = Array.isArray(p.image) ? p.image[0] : p.image || 'default-image.jpg';
    return { id, nameLower: fullName.toLowerCase(), nameOrig: fullName, image };
  });
  function hide() {
    box.style.display = 'none';
    box.innerHTML = '';
  }
  function show(list) {
    box.innerHTML = '';
    list.forEach(item => {
      const div = document.createElement('div');
      div.className = 'search-suggestion';
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.nameOrig;
      img.className = 'suggestion-image';
      const text = document.createElement('span');
      text.className = 'suggestion-text';
      text.textContent = item.nameOrig;
      div.appendChild(img);
      div.appendChild(text);
      div.addEventListener('click', () => (window.location.href = `perfume.html?id=${item.id}`));
      box.appendChild(div);
    });
    box.style.display = list.length ? 'block' : 'none';
  }
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) return hide();
    show(all.filter(x => x.nameLower.includes(q)));
  });
  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !box.contains(e.target)) hide();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      hide();
      input.blur();
    }
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  renderAuthButton();

  if (window.location.pathname.includes('perfume.html')) {
    const id = getQueryParam('id');
    if (!id || !perfumes[id]) {
      console.error('Парфум не знайдено:', id);
      window.location.href = '/404.html';
      return;
    }

    displayPerfumeInfo();
    updateVariationsAndPrice();
    renderRecentlyViewed();
    renderComments();
  }
});