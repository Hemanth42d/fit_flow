import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import SlotCard from './SlotCard'

function SlotCalendar({ slots, selectedSlot, onReserve }) {
  const { isDark } = useTheme()
  
  const morningSlots = slots.filter(s => s.period === 'morning')
  const eveningSlots = slots.filter(s => s.period === 'evening')

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-6 lg:p-8 lg:border-l border-white/5 overflow-y-auto"
    >
      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Schedule
        </h2>
        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          Select your preferred time slot
        </p>
      </div>

      {/* Morning */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">☀️</span>
          <h3 className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Morning
          </h3>
          <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            6 AM – 11 AM
          </span>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3"
        >
          {morningSlots.map((slot, i) => (
            <SlotCard
              key={slot.id}
              slot={slot}
              index={i}
              isSelected={selectedSlot === slot.id}
              onReserve={() => onReserve(slot.id)}
            />
          ))}
        </motion.div>
      </section>

      {/* Evening */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🌙</span>
          <h3 className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Evening
          </h3>
          <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            5 PM – 10 PM
          </span>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3"
        >
          {eveningSlots.map((slot, i) => (
            <SlotCard
              key={slot.id}
              slot={slot}
              index={i + 5}
              isSelected={selectedSlot === slot.id}
              onReserve={() => onReserve(slot.id)}
            />
          ))}
        </motion.div>
      </section>

      {/* Legend */}
      <div className={`
        mt-8 pt-6 border-t flex flex-wrap gap-6 text-xs
        ${isDark ? 'border-white/5 text-gray-500' : 'border-gray-200 text-gray-500'}
      `}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Low</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <span>Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span>High</span>
        </div>
      </div>
    </motion.main>
  )
}

export default SlotCalendar
