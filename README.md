# HarmonyHub — GCSE Music Theory Revision (Eduqas)

A modern revision web app for GCSE Music Theory. Sign up, **learn** each topic
with flashcards, work through difficulty-graded question levels, then sit the
end-of-topic exam. Progress is tracked per user.

## Features

- **Accounts** — username/password sign-up and login.
- **Cross-device progress** — when run with the backend, accounts and progress
  are stored server-side (SQLite) and sync across devices. With no backend
  (e.g. the static GitHub Pages deploy), it falls back to this browser's
  `localStorage` automatically.
- **Learn feature** — flip-card flashcards for every topic to understand the
  concepts before answering questions.
- **Graded levels** — each topic has Foundation → Intermediate → Higher levels
  (8 questions each) plus a 10-question exam. ~34 questions per topic.
- **Randomised options** — answer positions are shuffled every attempt.
- **Topics** — Note Names & Pitch, Intervals, Major & Minor Scales, Triads,
  Root/Third/Fifth, Chord Inversions, Arpeggios, Seventh Chords, the Blues
  Scale, and Cadences.

## Run it

### Option A — full app with cross-device accounts (recommended)

Needs Python 3 (standard library only — no `pip install`):

```bash
python3 server.py            # serves the site + API at http://localhost:8000
PORT=4173 python3 server.py  # custom port
```

Then open the printed URL. Accounts are saved in `harmonyhub.db` (created
automatically; not committed to git).

### Option B — static only (per-device accounts)

Just open `index.html`, or serve the folder with any static server. Without a
backend, accounts live in the browser's `localStorage`.

## Deploying the backend

`server.py` is a single self-contained file. Host it anywhere that runs
Python (Render, Railway, Fly.io, a VPS, etc.), set the `PORT` environment
variable if required, and it will serve both the site and the API. The frontend
auto-detects the backend at `/api/*` on the same origin.

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Markup / app shell |
| `styles.css` | Blue-and-white gradient theme, flashcards, quiz UI |
| `questions.js` | Flashcards + question bank for all topics |
| `api.js` | Data layer — backend when available, else `localStorage` |
| `app.js` | Auth, progress, Learn, and the quiz engine |
| `server.py` | Zero-dependency Python backend (HTTP + SQLite) |

## Security note

Passwords sent to the backend are hashed with PBKDF2-HMAC-SHA256 before
storage. In `localStorage` fallback mode the credentials are only lightly
obfuscated — fine for a personal/classroom revision tool, but not a substitute
for real authentication. Serve over HTTPS in production.
