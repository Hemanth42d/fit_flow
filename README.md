# FitFlow – Smart Workout Planner

A premium single-page application that helps gym members avoid overcrowded workout times through visual slot booking.

## ✨ Features

- **Time Slot Booking** - 10 slots (5 morning + 5 evening)
- **Occupancy Visualization** - Color-coded progress bars (green/yellow/red)
- **Dark/Light Theme** - Smooth animated toggle
- **Accent Colors** - 5 customizable colors (Cyan, Emerald, Violet, Rose, Amber)
- **Achievement Badges** - Gamification with unlock animations
- **Breathing Exercise** - 4-4-4 guided breathing modal
- **Mood Tracking** - Post-workout reflection
- **Confetti Celebrations** - On streaks and badge unlocks
- **Fully Responsive** - Mobile, tablet, and desktop

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### GitHub Pages

1. Run: `npm run deploy`
2. Enable Pages in repo Settings → Pages → Source: `gh-pages`

Live at: `https://Hemanth42d.github.io/fit_flow/`

## 📁 Project Structure

```
fit_flow/
├── .kiro/                    # Kiro AI metadata
├── src/
│   ├── components/           # React components
│   ├── context/              # Theme context
│   ├── data/                 # Quotes data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Tech Stack

- React 18
- Tailwind CSS
- Framer Motion
- Vite
- localStorage (persistence)

---

Built with Kiro AI Assistant for AWS AI for Bharat Challenge
