import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { getDailyQuote } from '../data/quotes'

function QuoteDisplay() {
  const { isDark } = useTheme()
  const quote = getDailyQuote()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={`
        rounded-xl p-4
        ${isDark ? 'bg-matte-card/50' : 'bg-gray-100'}
      `}
    >
      <p className={`text-sm italic leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        "{quote.text}"
      </p>
      {quote.author !== 'Unknown' && (
        <p className={`text-xs mt-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          — {quote.author}
        </p>
      )}
    </motion.div>
  )
}

export default QuoteDisplay
