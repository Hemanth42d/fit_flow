import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Lightweight confetti component using CSS/Framer Motion
 * No external dependencies required
 */
function Confetti({ trigger }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (trigger) {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        color: ['#22d3ee', '#4ade80', '#fbbf24', '#f87171', '#a78bfa', '#fb7185'][Math.floor(Math.random() * 6)],
        delay: Math.random() * 0.3,
        rotation: Math.random() * 360,
        size: Math.random() * 8 + 4,
      }))
      setParticles(newParticles)

      // Clear after animation
      const timer = setTimeout(() => setParticles([]), 3000)
      return () => clearTimeout(timer)
    }
  }, [trigger])

  return (
    <AnimatePresence>
      {particles.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{
                x: `${particle.x}vw`,
                y: -20,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: '110vh',
                rotate: particle.rotation + 720,
                opacity: [1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2.5 + Math.random(),
                delay: particle.delay,
                ease: 'easeIn',
              }}
              style={{
                position: 'absolute',
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}

export default Confetti
