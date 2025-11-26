import { motion } from 'framer-motion'

function ReflectionModal({ onSubmit, onClose }) {
  const moods = [
    { emoji: '😀', label: 'Great', value: 'great' },
    { emoji: '😐', label: 'Okay', value: 'okay' },
    { emoji: '😔', label: 'Tough', value: 'tough' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center sm:items-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="w-full sm:w-auto sm:min-w-[320px] bg-matte-dark border-t sm:border border-matte-border sm:rounded-2xl p-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-white font-medium text-lg">Slot Reserved!</h3>
          <p className="text-gray-500 text-sm mt-1">How are you feeling about today's workout?</p>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          {moods.map((mood) => (
            <motion.button
              key={mood.value}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSubmit(mood.value)}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-matte-card hover:bg-matte-border transition-colors"
            >
              <span className="text-3xl">{mood.emoji}</span>
              <span className="text-xs text-gray-500">{mood.label}</span>
            </motion.button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2 text-gray-500 text-sm hover:text-gray-400 transition-colors"
        >
          Skip
        </button>
      </motion.div>
    </motion.div>
  )
}

export default ReflectionModal
