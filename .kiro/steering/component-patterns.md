---
inclusion: fileMatch
fileMatchPattern: "src/components/**/*.jsx"
---

# Component Patterns for GymSlot

## Standard Component Template
```jsx
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function ComponentName({ prop1, prop2 }) {
  const { isDark } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`
        rounded-2xl p-4
        ${isDark ? 'glass-dark' : 'glass-light'}
      `}
    >
      {/* Component content */}
    </motion.div>
  )
}

export default ComponentName
```

## Glassmorphism Classes
- Dark mode: `glass-dark` (rgba(255,255,255,0.03) + blur)
- Light mode: `glass-light` (rgba(255,255,255,0.8) + blur)

## Animation Patterns
- Fade-in: `initial={{ opacity: 0 }} animate={{ opacity: 1 }}`
- Slide-in: `initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}`
- Hover scale: `whileHover={{ scale: 1.02 }}`
- Tap feedback: `whileTap={{ scale: 0.98 }}`
- Stagger children: Use `variants` with `staggerChildren`

## Color Coding for Occupancy
- Low (0-30%): `bg-emerald-500` / `text-emerald-500`
- Medium (31-70%): `bg-amber-500` / `text-amber-500`
- High (71-100%): `bg-red-500` / `text-red-500`

## Dynamic Accent Colors
Use CSS variable `var(--accent-color)` for theme-aware accent styling:
- `.accent-bg` - Background color
- `.accent-text` - Text color
- `.accent-border` - Border color
- `.accent-glow` - Box shadow glow
