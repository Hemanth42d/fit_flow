import { motion } from 'framer-motion'
import { useTheme, accentColors } from '../context/ThemeContext'

function AccentColorPicker() {
  const { isDark, accentColor, setAccentColor } = useTheme()

  return (
    <div className="space-y-2">
      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        Accent Color
      </p>
      <div className="flex gap-2">
        {accentColors.map((color) => (
          <motion.button
            key={color.id}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setAccentColor(color.id)}
            className={`
              w-6 h-6 rounded-full transition-all
              ${color.class}
              ${accentColor === color.id 
                ? 'ring-2 ring-offset-2 ring-offset-matte-black ring-white/50' 
                : 'opacity-60 hover:opacity-100'
              }
            `}
            title={color.name}
          />
        ))}
      </div>
    </div>
  )
}

export default AccentColorPicker
