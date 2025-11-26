# GymSlot – Smart Workout Planner

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
cd gymslot
npm install
npm run dev
```

Open http://localhost:5173

## 🌐 GitHub Pages Deployment

### Step 1: Update Configuration

Edit `vite.config.js` and change the base path to your repo name:
```js
base: '/your-repo-name/',
```

Edit `package.json` and update the homepage:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

### Step 2: Deploy

```bash
npm run deploy
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select branch: **gh-pages** / **root**
5. Click **Save**

Your app will be live at: `https://yourusername.github.io/your-repo-name/`

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to GitHub Pages |

## 📁 Project Structure

```
gymslot/
├── src/
│   ├── components/
│   │   ├── LayoutWrapper.jsx
│   │   ├── UserPanel.jsx
│   │   ├── SlotCalendar.jsx
│   │   ├── SlotCard.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── AccentColorPicker.jsx
│   │   ├── BadgeSystem.jsx
│   │   ├── QuoteDisplay.jsx
│   │   ├── BreathingModal.jsx
│   │   ├── ReflectionModal.jsx
│   │   ├── ReflectionGraph.jsx
│   │   └── Confetti.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── quotes.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .kiro/                    # Kiro agent metadata
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

Built with Kiro AI Assistant
