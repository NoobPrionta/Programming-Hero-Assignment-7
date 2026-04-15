# KeenKeeper — React App

## Quick Start

```bash
npm create vite@latest keenkeeper -- --template react
cd keenkeeper
npm install
```

Replace the generated `src/` folder with the files from this download.

## Add Google Fonts

Paste this in `index.html` inside `<head>`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

## File Structure

```
src/
├── App.jsx                   ← Root — shared timeline state & toast system
├── data/
│   └── mockData.js           ← Friends data + DiceBear avatar URLs
└── components/
    ├── Navbar.jsx             ← Sticky nav, hamburger menu on mobile
    ├── Footer.jsx             ← Dark footer
    ├── HeroBanner.jsx         ← Hero with "Add a Friend" CTA
    ├── StatsBar.jsx           ← 4 live stat cards (2×2 on mobile)
    ├── FriendCard.jsx         ← Card with real photo avatar
    ├── FriendGrid.jsx         ← Responsive card grid
    ├── FriendDetail.jsx       ← Detail page — Call/Text/Video log to timeline
    ├── Timeline.jsx           ← Starts EMPTY, fills as interactions logged
    ├── StatsPage.jsx          ← SVG donut chart analytics
    └── Toast.jsx              ← Animated toast notification
```

## Key Features

- **Timeline starts empty** — entries only appear when you click Call / Text / Video on a Friend Detail page
- **Toast notifications** — appear bottom-right whenever an interaction is logged
- **Real avatars** via DiceBear Personas API (no auth required)
- **Fully responsive** — hamburger nav on mobile, 2-column grids on small screens, fluid `clamp()` spacing throughout

## Run

```bash
npm run dev
```
