import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function BreathingModal({ onClose }) {
  const [phase, setPhase] = useState('inhale')
  const [count, setCount] = useState(4)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev <= 1) {
          setPhase(p => {
            if (p === 'inhale') return 'hold'
            if (p === 'hold') return 'exhale'
            return 'inhale'
          })
          return 4
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getCircleScale = () => {
    if (phase === 'inhale') return 1.5
    if (phase === 'hold') return 1.5
    return 1
  }

  const phaseText = {
    inhale: 'Breathe In',
    hold: 'Hold',
    exhale: 'Breathe Out'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-matte-black/98 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="text-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative w-64 h-64 mx-auto mb-8">
          {/* Outer glow */}
          <motion.div
            animate={{ 
              scale: getCircleScale(),
              opacity: phase === 'hold' ? [0.3, 0.6, 0.3] : 0.3
            }}
            transition={{ 
              scale: { duration: 4, ease: 'easeInOut' },
              opacity: { duration: 1, repeat: phase === 'hold' ? Infinity : 0 }
            }}
            className="absolute inset-0 rounded-full blur-xl"
            style={{ backgroundColor: 'var(--accent-color)', opacity: 0.2 }}
          />
          
          {/* Main circle */}
          <motion.div
            animate={{ scale: getCircleScale() }}
            transition={{ duration: 4, ease: 'easeInOut' }}
            className="absolute inset-8 rounded-full border-2 flex items-center justify-center"
            style={{ 
              borderColor: 'var(--accent-color)',
              backgroundColor: 'color-mix(in srgb, var(--accent-color) 10%, transparent)'
            }}
          >
            <div className="text-center">
              <p className="text-5xl font-light text-white mb-2">{count}</p>
              <p className="accent-text text-sm uppercase tracking-widest">
                {phaseText[phase]}
              </p>
            </div>
          </motion.div>
        </div>

        <p className="text-gray-500 text-sm max-w-xs mx-auto">
          Follow the circle. Inhale as it expands, hold, then exhale as it shrinks.
        </p>

        <p className="text-gray-600 text-xs mt-4">
          Tap anywhere to close
        </p>
      </motion.div>
    </motion.div>
  )
}

export default BreathingModal
