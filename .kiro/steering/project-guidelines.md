# GymSlot Project Guidelines

## Purpose
GymSlot is a single-purpose micro-tool that helps gym members avoid overcrowded workout times by visualizing slot occupancy and allowing reservations.

## Tech Stack
- React 18 with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- localStorage for state persistence
- GitHub Pages for deployment

## Design Principles
- Minimalistic, premium dark UI (#0c0c0d background)
- Glassmorphism card design with blur effects
- Dynamic accent colors via CSS variables
- Smooth micro-interactions and transitions
- Mobile-first responsive layout

## Architecture
- Single Page Application (no routing)
- Component-driven structure
- Context API for global state (theme, accent color)
- localStorage for data persistence

## Key Features
1. Time slot booking with occupancy visualization
2. Color-coded status (green/yellow/red)
3. Dark/light theme toggle
4. Accent color customization (5 colors)
5. Achievement badges with unlock animations
6. Breathing exercise modal
7. Post-workout mood tracking
8. Confetti celebrations
9. 7-day history heatmap

## localStorage Keys
- `gymslot-slots` - Current slot data
- `gymslot-selected` - Active reservation
- `gymslot-history` - Booking history
- `gymslot-reflections` - Mood data
- `gymslot-badges` - Unlocked badges
- `gymslot-theme` - Theme preference
- `gymslot-accent` - Accent color

## No Backend Required
All data persists in localStorage. No API calls or cloud services.
