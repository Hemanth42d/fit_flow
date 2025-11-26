import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function LayoutWrapper({ children }) {
  const { isDark } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`
        min-h-screen w-full transition-colors duration-500
        ${isDark ? 'bg-matte-black text-white' : 'bg-light-bg text-gray-900'}
      `}
    >
      {/* Responsive: stack on mobile, side-by-side on lg+ */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {children}
      </div>
    </motion.div>
  )
}

export default LayoutWrapper
