import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// Available accent colors
export const accentColors = [
  { id: 'cyan', name: 'Cyan', value: '#22d3ee', class: 'bg-cyan-400' },
  { id: 'emerald', name: 'Emerald', value: '#10b981', class: 'bg-emerald-500' },
  { id: 'violet', name: 'Violet', value: '#8b5cf6', class: 'bg-violet-500' },
  { id: 'rose', name: 'Rose', value: '#f43f5e', class: 'bg-rose-500' },
  { id: 'amber', name: 'Amber', value: '#f59e0b', class: 'bg-amber-500' },
]

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('gymslot-theme')
    return saved ? saved === 'dark' : true
  })

  const [accentColor, setAccentColor] = useState(() => {
    const saved = localStorage.getItem('gymslot-accent')
    return saved || 'cyan'
  })

  useEffect(() => {
    localStorage.setItem('gymslot-theme', isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    localStorage.setItem('gymslot-accent', accentColor)
    // Update CSS variable for accent color
    const color = accentColors.find(c => c.id === accentColor)?.value || '#22d3ee'
    document.documentElement.style.setProperty('--accent-color', color)
  }, [accentColor])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, accentColor, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
