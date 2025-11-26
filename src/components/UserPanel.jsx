import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'
import AccentColorPicker from './AccentColorPicker'
import BadgeSystem from './BadgeSystem'
import QuoteDisplay from './QuoteDisplay'

function UserPanel({ selectedSlot, slots, onCancel, onOpenBreathing, streak, badges, bookingCount, reflections }) {
  const { isDark } = useTheme()
  const selected = slots?.find(s => s.id === selectedSlot)
  const recentMoods = reflections?.slice(-5) || []

  return (
    <motion.aside
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full lg:w-[30%] p-6 lg:p-8 flex flex-col gap-5 overflow-y-auto"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className={`
          w-10 h-10 rounded-xl flex items-center justify-center
          ${isDark ? 'bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20' : 'bg-cyan-100'}
        `}>
          <svg className="w-5 h-5 accent-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h2m12 0h2M6 8v8m12-8v8M8 6h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
          </svg>
        </div>
        <div>
          <h1 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            GymSlot
          </h1>
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Smart Workout Planner
          </p>
        </div>
      </div>

      {/* User Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className={`rounded-2xl p-5 ${isDark ? 'glass-dark' : 'glass-light shadow-lg'}`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`
            w-12 h-12 rounded-xl flex items-center justify-center text-xl
            ${isDark ? 'bg-matte-card border border-matte-border' : 'bg-gray-100'}
          `}>
            👤
          </div>
          <div className="flex-1">
            <h2 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Gym Member
            </h2>
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Premium Access
            </p>
          </div>
          {streak > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-2 py-1 rounded-lg flex items-center gap-1 bg-amber-500/10 border border-amber-500/20"
            >
              <span>🔥</span>
              <span className="text-sm font-medium text-amber-500">{streak}</span>
            </motion.div>
          )}
        </div>

        {/* Stats */}
        <div className={`flex gap-4 py-3 border-y mb-4 ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
          <div className="flex-1 text-center">
            <p className="text-lg font-semibold accent-text">{bookingCount}</p>
            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Bookings</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-lg font-semibold accent-text">{streak}</p>
            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Streak</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-lg font-semibold accent-text">{badges.length}</p>
            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Badges</p>
          </div>
        </div>

        {/* Badges */}
        <BadgeSystem unlockedBadges={badges} />
      </motion.div>

      {/* Quote */}
      <QuoteDisplay />

      {/* Recent Moods */}
      {recentMoods.length > 0 && (
        <div className={`rounded-xl p-4 ${isDark ? 'bg-matte-card/50' : 'bg-gray-100'}`}>
          <p className={`text-xs font-medium mb-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Recent Moods
          </p>
          <div className="flex gap-2">
            {recentMoods.map((r, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="text-lg"
              >
                {r.mood === 'great' ? '😀' : r.mood === 'okay' ? '😐' : '😔'}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      {/* Breathing button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpenBreathing}
        className={`
          w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-colors
          ${isDark 
            ? 'bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 accent-text hover:bg-[var(--accent-color)]/20' 
            : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
          }
        `}
      >
        <span>🧘</span>
        <span className="text-sm font-medium">Warm-Up Breathing</span>
      </motion.button>

      {/* Settings: Theme & Accent */}
      <div className={`rounded-xl p-4 space-y-4 ${isDark ? 'bg-matte-card/30' : 'bg-gray-50'}`}>
        <div className="flex items-center justify-between">
          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Theme</span>
          <ThemeToggle />
        </div>
        <AccentColorPicker />
      </div>

      {/* Reservation */}
      {selected && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`
            rounded-2xl p-5 border
            ${isDark ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-green-50 border-green-200'}
          `}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className={`text-xs font-medium ${isDark ? 'text-emerald-400' : 'text-green-600'}`}>
              Reserved
            </span>
          </div>
          <p className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {selected.startTime} – {selected.endTime}
          </p>
          <button
            onClick={onCancel}
            className={`
              w-full py-2 rounded-xl text-sm font-medium transition-colors
              ${isDark ? 'bg-matte-card hover:bg-matte-dark text-gray-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}
            `}
          >
            Cancel
          </button>
        </motion.div>
      )}
    </motion.aside>
  )
}

export default UserPanel
