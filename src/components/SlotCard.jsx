import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function SlotCard({ slot, index, isSelected, onReserve }) {
  const { isDark } = useTheme()
  
  const percentage = Math.round((slot.count / slot.capacity) * 100)
  
  const getStatus = () => {
    if (percentage <= 30) return { color: 'bg-emerald-500', text: 'text-emerald-500' }
    if (percentage <= 70) return { color: 'bg-amber-500', text: 'text-amber-500' }
    return { color: 'bg-red-500', text: 'text-red-500' }
  }
  const status = getStatus()

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onReserve}
      className={`
        relative rounded-2xl p-4 cursor-pointer transition-all duration-200
        ${isDark ? 'glass-dark neon-hover' : 'glass-light shadow-md hover:shadow-lg'}
        ${isSelected ? 'ring-1 ring-[var(--accent-color)] accent-glow' : ''}
      `}
    >
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3 w-5 h-5 rounded-full accent-bg flex items-center justify-center"
        >
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </motion.div>
      )}

      <div className="mb-3">
        <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {slot.startTime}
        </span>
        <span className={`text-sm ml-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          → {slot.endTime}
        </span>
      </div>

      <div className="mb-3">
        <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-matte-card' : 'bg-gray-200'}`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
            className={`h-full rounded-full ${status.color}`}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <svg className={`w-3.5 h-3.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            {slot.count}/{slot.capacity}
          </span>
        </div>
        <span className={`text-xs font-medium ${status.text}`}>
          {percentage}%
        </span>
      </div>
    </motion.div>
  )
}

export default SlotCard
