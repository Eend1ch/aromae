# Aromae 🌸

A perfume catalog website with filters, search, perfume pages, ratings and comments.
Built as a personal project in **2025**.

> **Status: archived "as it was" in 2025.**
> The project is half-working, the architecture is rough, and I'm leaving it that way on purpose.
> A step-by-step refactor is planned and will land as separate commits, so the history shows the before and after.

## Screenshots

<!-- Put screenshots into a /screenshots folder and uncomment: -->
<!-- ![Catalog](screenshots/catalog.png) -->
<!-- ![Perfume page](screenshots/perfume.png) -->

## Features

- **Catalog** of perfumes with product cards
- **Filters** by gender, brand and perfume type (EDP, EDT, cologne, parfum, extrait) and by store
- **Search** by perfume name
- **Perfume page** with details and links to stores (Brocard, Notino)
- **"Recently viewed"** block
- **Registration / login**
- **Comments with star ratings** for logged-in users
- **Contact form** (sends mail via `nodemailer`)
- **Python scraper** for collecting perfume data and images

## Tech stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, `nodemailer`
- **Storage:** plain JSON files (`users.json`, `comments.json`, `messages.json`)
- **Scraper:** Python (`selenium`, `beautifulsoup4`, `cloudscraper`, `requests`)

## Getting started

```bash
git clone https://github.com/Eend1ch/aromae.git
cd aromae
npm install
npm start        # or: node <your-server-file>.js
```

The site runs at `http://localhost:3000`.

If you use the contact form, create a `.env` file with your own mail credentials
(never commit it).

### Scraper (optional)

```bash
pip install -r requirements.txt
python <scraper-file>.py
```

## Known issues

I'd rather be upfront about this than pretend it's polished:

- 🕷️ **The scraper is flaky.** It breaks when shops change their markup or put up bot protection, so only part of the sources work.
- 📁 **`requirements.txt` is in the wrong place.** It belongs to the Python scraper but lives in the project root next to the Node.js files. Needs to be moved into a dedicated scraper folder.
- 🧱 **Rough architecture.** Backend logic, routing and data access are not cleanly separated; the frontend logic is duplicated in several places.
- 💾 **JSON files instead of a real database.** Fine for a demo, not for anything with real users.
- 🔐 **Auth is basic** and was never meant for production.
- 🛒 Most items show "out of stock" because availability data is a placeholder.

## About the comments

The comments in `comments.json` are left in **on purpose, just for the vibe**.
They're test data from friends and me messing around. No real personal data
is stored in the repository.

## Roadmap

- [ ] Split backend into modules (routes / services / data)
- [ ] Move perfume data into a proper JSON/DB layer
- [ ] Move the scraper into its own folder with its own `requirements.txt`
- [ ] Fix or rewrite broken scraper sources
- [ ] Replace placeholder availability with real "where to buy" links
- [ ] Hash passwords properly and add validation

## Disclaimer

This is an educational, non-commercial project. Perfume names, brands and
images belong to their respective owners.
