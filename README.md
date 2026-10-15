# Voke Website

Full-service advertising and digital growth company — built with Django (backend) and React/Vite (frontend).

---

## Project structure

```
voak/
├── backend/           Django + Django REST Framework
│   ├── voke/          Django project (settings, urls, wsgi)
│   ├── api/           DRF app — contact submissions, services, projects
│   ├── manage.py
│   ├── requirements.txt
│   ├── .env.example   ← copy to .env and fill in real values
│   └── db.sqlite3     Created on first migration (git-ignored)
└── frontend/          React + Vite
    ├── src/
    │   ├── api/       API client (fetch wrapper)
    │   ├── components/
    │   │   ├── layout/  Nav, Footer, Layout
    │   │   └── ui/      Icon, Reveal, WhatsAppButton
    │   ├── data/      content.js — single source of truth for all site content
    │   ├── pages/     Home, Services, Work, About, Contact, Privacy, Terms, NotFound
    │   └── styles/    index.css — design tokens, global styles
    ├── .env           ← set VITE_API_BASE_URL
    └── .env.example
```

---

## Quickstart

### 1 — Backend (Django)

```powershell
cd backend

# Create and activate virtual environment
python -m venv .venv
.venv\Scripts\activate      # Windows
# source .venv/bin/activate  # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Create .env from example
copy .env.example .env
# Edit .env — set a strong SECRET_KEY at minimum

# Apply database migrations
python manage.py migrate

# (Optional) create a Django admin superuser
python manage.py createsuperuser

# Run development server
python manage.py runserver
```

Backend runs at **http://localhost:8000**

### 2 — Frontend (React)

```powershell
cd frontend
npm install

# .env is already present with VITE_API_BASE_URL=http://localhost:8000/api
# Edit if your backend runs on a different port

npm run dev
```

Frontend runs at **http://localhost:5173**

> **Vite dev proxy**: `/api` requests in the browser are automatically proxied to `http://localhost:8000` — no CORS issues during development.

---

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/contact/` | Submit contact form — stores submission, attempts email if configured |
| `GET` | `/api/services/` | Returns services list (static data) |
| `GET` | `/api/projects/` | Returns project list; filter by `?service=<id>` |

### Contact submission payload

```json
{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "phone": "+91 99999 99999",
  "company": "Acme Pvt Ltd",
  "service": "digital_marketing",
  "budget": "50k_2l",
  "message": "We need help with our social media and SEO.",
  "privacy_consent": true
}
```

Service choices: `advertising` | `digital_marketing` | `consultancy` | `web_dev` | `not_sure`
Budget choices: `under_50k` | `50k_2l` | `2l_5l` | `above_5l` | `prefer_not`

---

## Configuration

### Backend `.env` keys

| Key | Required | Notes |
|-----|----------|-------|
| `SECRET_KEY` | ✅ | Long random string — never expose |
| `DEBUG` | ✅ | `True` for dev, `False` for production |
| `ALLOWED_HOSTS` | ✅ | Comma-separated hostnames |
| `CORS_ALLOWED_ORIGIN` | ✅ | Frontend origin, e.g. `http://localhost:5173` |
| `EMAIL_HOST` | Optional | Leave blank to use console backend (logs to terminal) |
| `EMAIL_HOST_USER` | Optional | SMTP username |
| `EMAIL_HOST_PASSWORD` | Optional | SMTP password |
| `CONTACT_RECIPIENT_EMAIL` | Optional | Where contact submissions are emailed |

### Frontend `.env` keys

| Key | Notes |
|-----|-------|
| `VITE_API_BASE_URL` | Django API base URL, e.g. `http://localhost:8000/api` |

---

## Content to replace before launch

Edit **`frontend/src/data/content.js`** — this is the single source of truth for all site content. Replace the following:

### Business details (SITE_CONFIG)
- `phone` — real phone number
- `email` — real contact email
- `address` — real office address
- `whatsapp` — real WhatsApp number (country code + number, no `+`)
- `social.*` — real social media URLs

### Case studies (PROJECTS)
Replace all 4 placeholder projects with real client work. For each project, provide:
- Client name and industry
- The real challenge
- The insight / strategy
- Execution details
- Verified, client-approved outcomes
- Remove `isPlaceholder: true` when real

### Testimonials (TESTIMONIALS)
Replace all 3 placeholder testimonials with real, client-approved quotes.

### About page
In `frontend/src/pages/About.jsx`, replace:
- Founder name, title, bio
- Team member names, roles, photos
- Company story (2–3 paragraphs)
- Office address

### Legal pages
`/privacy` and `/terms` are placeholder templates only. **Have them reviewed by a qualified legal professional** before publishing. Replace all `[bracketed]` text with real content.

---

## Production deployment checklist

- [ ] Set `DEBUG=False` in backend `.env`
- [ ] Set a strong, unique `SECRET_KEY`
- [ ] Set `ALLOWED_HOSTS` to your real domain(s)
- [ ] Set `CORS_ALLOWED_ORIGIN` to your production frontend domain
- [ ] Configure `EMAIL_HOST` and credentials for real email delivery
- [ ] Run `python manage.py collectstatic`
- [ ] Serve Django with gunicorn + nginx (or similar)
- [ ] Build React: `npm run build` — serve the `dist/` folder
- [ ] Replace all placeholder content (see above)
- [ ] Have legal pages reviewed before publishing
- [ ] Add real WhatsApp number to `SITE_CONFIG.whatsapp`

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Backend framework | Django 4.2 |
| API | Django REST Framework 3.17 |
| CORS | django-cors-headers |
| Environment | python-decouple |
| Database | SQLite (development) — swap to PostgreSQL for production |
| Frontend | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Vanilla CSS with design tokens |
| Fonts | Google Fonts — Playfair Display + Inter |
| Icons | Inline SVG (no external library) |
