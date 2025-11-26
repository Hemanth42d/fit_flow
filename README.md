# GymSlot – Smart Workout Planner

A premium minimalistic SPA with gamification, breathing exercises, mood tracking, and smart insights.

## ✨ Features

### Core
- **Time Slot Booking** - 10 slots (5 morning + 5 evening)
- **Occupancy Visualization** - Color-coded progress bars
- **Dark/Light Mode** - Smooth animated toggle
- **localStorage Persistence** - All data survives refresh

### Gamification
- **Achievement Badges** - Unlock badges based on behavior:
  - ⭐ Getting Started (5 bookings)
  - 🔥 Consistency King (7-day streak)
  - ☀️ Early Bird (5 morning slots)
  - 🏋️ Persistent (20 bookings)
- **Streak Counter** - Track consecutive booking days
- **Badge Unlock Animation** - Notification toast with glow

### Wellness
- **Breathing Exercise** - Fullscreen 4-4-4 breathing modal
  - Animated expanding/contracting circle
  - Phase indicators (Inhale → Hold → Exhale)
- **Daily Motivational Quotes** - Rotates daily from local JSON
- **Post-Workout Reflection** - Rate your workout (😀 😐 😔)
- **Weekly Mood Graph** - Visual 7-day reflection history

### Insights
- **Today/History Toggle** - Switch between views
- **7-Day Occupancy Heatmap** - Historical trend bars
- **Recent Bookings List** - Quick history view

## 🚀 Quick Start

```bash
cd gymslot
npm install
npm run dev
```

Open http://localhost:5173

## 📁 Structure

```
src/
├── components/
│   ├── LayoutWrapper.jsx     # Main layout
│   ├── UserPanel.jsx         # Left sidebar (30%)
│   ├── SlotCalendar.jsx      # Today view (70%)
│   ├── SlotCard.jsx          # Individual slot
│   ├── ThemeToggle.jsx       # Dark/light switch
│   ├── BadgeSystem.jsx       # Achievement badges
│   ├── QuoteDisplay.jsx      # Daily quote
│   ├── BreathingModal.jsx    # Breathing exercise
│   ├── ReflectionModal.jsx   # Post-workout mood
│   ├── ReflectionGraph.jsx   # Weekly mood chart
│   ├── ViewToggle.jsx        # Today/History switch
│   └── HistoryView.jsx       # History panel
├── context/
│   └── ThemeContext.jsx
├── data/
│   └── quotes.js             # Motivational quotes
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Design

| Element | Dark Mode | Light Mode |
|---------|-----------|------------|
| Background | #0c0c0d | #fafafa |
| Cards | Glass blur + subtle border | White + shadow |
| Accent | Cyan #22d3ee | Cyan-600 |

## 🏆 Badge System

Badges are unlocked automatically based on:
- Total booking count
- Morning slot preference
- Consecutive day streaks

## 🧘 Breathing Exercise

4-second cycle:
1. **Inhale** - Circle expands
2. **Hold** - Pulse glow effect
3. **Exhale** - Circle shrinks

## 🌐 GitHub Pages Deployment

1. Update `vite.config.js`:
   ```js
   base: '/your-repo-name/',
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

3. Enable Pages: Settings → Pages → Source: `gh-pages`

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run deploy` | Deploy to GitHub Pages |

## 📱 localStorage Keys

- `gymslot-slots` - Current slot data
- `gymslot-selected` - Active reservation
- `gymslot-history` - Booking history
- `gymslot-reflections` - Mood data
- `gymslot-badges` - Unlocked badges
- `gymslot-theme` - Theme preference

---

Built with React + Tailwind CSS + Framer Motion
