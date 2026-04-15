# KeenKeeper React App

## Setup

```bash
npm create vite@latest keenkeeper -- --template react
cd keenkeeper
npm install
```

Then **replace** the generated `src/` folder with the files from this download.

## Add Google Fonts

In your `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## File Structure

```
src/
├── App.jsx                   ← Root app, handles page routing
├── data/
│   └── mockData.js           ← All sample data (friends, interactions, stats)
└── components/
    ├── Navbar.jsx             ← Top nav bar with Home / Timeline / Stats
    ├── Footer.jsx             ← Dark footer with social links
    ├── HeroBanner.jsx         ← Hero section with "Add a Friend" button
    ├── StatsBar.jsx           ← 4 summary stat cards (Total, On Track, etc.)
    ├── FriendCard.jsx         ← Individual friend card with sticker avatar
    ├── FriendGrid.jsx         ← Grid wrapper for all FriendCards
    ├── FriendDetail.jsx       ← Full friend detail page (click a card)
    ├── Timeline.jsx           ← Chronological interaction list with filter
    └── StatsPage.jsx          ← Donut chart analytics page
```

## Run

```bash
npm run dev
```
