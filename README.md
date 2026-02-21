# earmarkIQ Landing Page

Landing page for **earmarkIQ** — AI-powered salary allocation for UK professionals.

## About

earmarkIQ analyses your salary the moment it lands and tells you exactly where your money goes, what you can cut, and how to grow what's left. Built for UK professionals earning £25k–£150k+.

## Tech Stack

- Pure HTML/CSS/JS — no framework, no build step
- Google Fonts (DM Sans, IBM Plex Mono)
- Single `index.html` file

## Run Locally

Just open `index.html` in your browser:

```bash
open index.html
```

Or use any local server:

```bash
npx serve .
```

## Deploy

The site auto-deploys to [Vercel](https://vercel.com) on every push to `main`.

```bash
git push origin main
```

## Project Structure

```
earmarkLanding/
├── index.html       ← main landing page
├── package.json     ← minimal config for Vercel
├── vercel.json      ← routing config
├── CLAUDE.md        ← project context for Claude Code
├── README.md        ← this file
└── assets/
    └── .gitkeep
```
