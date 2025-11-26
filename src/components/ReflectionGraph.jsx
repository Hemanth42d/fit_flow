import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function ReflectionGraph({ reflections = [] }) {
  const { isDark } = useTheme()
  
  // Get last 7 days
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(Date.now() - (6 - i) * 86400000)
    return date.toISOString().split('T')[0]
  })

  const moodColors = {
    great: 'bg-accent-green',
    okay: 'bg-accent-amber',
    tough: 'bg-accent-red',
  }

  const moodEmoji = {
    great: '😀',
    okay: '😐',
    tough: '😔',
  }

  return (
    <div className={`rounded-xl p-4 ${isDark ? 'bg-matte-card/50' : 'bg-gray-100'}`}>
      <p className={`text-xs font-medium mb-3 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        Weekly Mood
      </p>
      <div className="flex justify-between gap-1">
        {last7Days.map((date, i) => {
          const reflection = reflections.find(r => r.date === date)
          const dayName = new Date(date).toLocaleDateString('en', { weekday: 'short' }).charAt(0)
          
          return (
            <div key={date} className="flex flex-col items-center gap-1">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`
                  w-6 h-6 rounded-lg flex items-center justify-center text-xs
                  ${reflection 
                    ? moodColors[reflection.mood] 
                    : isDark ? 'bg-matte-border/50' : 'bg-gray-200'
                  }
                `}
              >
                {reflection ? moodEmoji[reflection.mood] : ''}
              </motion.div>
              <span className={`text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                {dayName}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReflectionGraph
