import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const allBadges = [
  { id: 'starter', icon: '⭐', name: 'Getting Started', desc: '5 Bookings' },
  { id: 'dedicated', icon: '💪', name: 'Dedicated', desc: '10 Bookings' },
  { id: 'streak7', icon: '🔥', name: 'Consistency King', desc: '7 Day Streak' },
  { id: 'earlybird', icon: '☀️', name: 'Early Bird', desc: '5 Morning Slots' },
  { id: 'persistent', icon: '🏋️', name: 'Power Lifter', desc: '20 Bookings' },
]

function BadgeSystem({ unlockedBadges = [] }) {
  const { isDark } = useTheme()

  return (
    <div className="space-y-3">
      <p className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        Achievements
      </p>
      <div className="grid grid-cols-5 gap-2">
        {allBadges.map((badge, i) => {
          const isUnlocked = unlockedBadges.includes(badge.id)
          return (
            <motion.div
              key={badge.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.15 }}
              className={`
                relative group flex flex-col items-center p-2 rounded-xl transition-all cursor-pointer
                ${isUnlocked 
                  ? 'bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30' 
                  : isDark 
                    ? 'bg-matte-card/30 border border-matte-border/30 opacity-30' 
                    : 'bg-gray-100 border border-gray-200 opacity-30'
                }
              `}
            >
              <span className={`text-xl ${isUnlocked ? '' : 'grayscale'}`}>
                {badge.icon}
              </span>
              
              {/* Tooltip */}
              <div className={`
                absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg
                text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity
                pointer-events-none z-20 text-center
                ${isDark ? 'bg-matte-dark border border-matte-border text-white' : 'bg-gray-800 text-white'}
              `}>
                <p className="font-medium">{badge.name}</p>
                <p className="text-gray-400 text-[10px]">{badge.desc}</p>
              </div>

              {/* Glow effect */}
              {isUnlocked && (
                <motion.div
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl bg-[var(--accent-color)]/30 blur-md -z-10"
                />
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default BadgeSystem
