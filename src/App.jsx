import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import LayoutWrapper from './components/LayoutWrapper'
import UserPanel from './components/UserPanel'
import SlotCalendar from './components/SlotCalendar'
import BreathingModal from './components/BreathingModal'
import ReflectionModal from './components/ReflectionModal'
import Confetti from './components/Confetti'

function App() {
  const [slots, setSlots] = useState(() => {
    const saved = localStorage.getItem('gymslot-slots')
    return saved ? JSON.parse(saved) : generateDefaultSlots()
  })

  const [selectedSlot, setSelectedSlot] = useState(() => {
    return localStorage.getItem('gymslot-selected') || null
  })

  const [bookingHistory, setBookingHistory] = useState(() => {
    const saved = localStorage.getItem('gymslot-history')
    return saved ? JSON.parse(saved) : []
  })

  const [reflections, setReflections] = useState(() => {
    const saved = localStorage.getItem('gymslot-reflections')
    return saved ? JSON.parse(saved) : []
  })

  const [badges, setBadges] = useState(() => {
    const saved = localStorage.getItem('gymslot-badges')
    return saved ? JSON.parse(saved) : []
  })

  const [showBreathing, setShowBreathing] = useState(false)
  const [showReflection, setShowReflection] = useState(false)
  const [newBadge, setNewBadge] = useState(null)
  const [showConfetti, setShowConfetti] = useState(0)
  const [prevStreak, setPrevStreak] = useState(0)

  // Persist state
  useEffect(() => {
    localStorage.setItem('gymslot-slots', JSON.stringify(slots))
  }, [slots])

  useEffect(() => {
    if (selectedSlot) {
      localStorage.setItem('gymslot-selected', selectedSlot)
    } else {
      localStorage.removeItem('gymslot-selected')
    }
  }, [selectedSlot])

  useEffect(() => {
    localStorage.setItem('gymslot-history', JSON.stringify(bookingHistory))
  }, [bookingHistory])

  useEffect(() => {
    localStorage.setItem('gymslot-reflections', JSON.stringify(reflections))
  }, [reflections])

  useEffect(() => {
    localStorage.setItem('gymslot-badges', JSON.stringify(badges))
  }, [badges])

  // Calculate streak
  const getStreak = (history = bookingHistory) => {
    const dates = [...new Set(history.map(h => h.date))].sort().reverse()
    let streak = 0
    for (let i = 0; i < dates.length; i++) {
      const expected = new Date(Date.now() - i * 86400000).toISOString().split('T')[0]
      if (dates[i] === expected) streak++
      else break
    }
    return streak
  }

  // Check for new badges
  const checkBadges = (history) => {
    const newBadges = []
    const totalBookings = history.length
    const morningBookings = history.filter(h => h.period === 'morning').length
    const streak = getStreak(history)

    if (streak > prevStreak && streak > 0) {
      setShowConfetti(Date.now())
      setPrevStreak(streak)
    }

    if (streak >= 7 && !badges.includes('streak7')) {
      newBadges.push({ id: 'streak7', icon: '🔥', name: 'Consistency King', desc: '7 Day Streak' })
    }
    if (morningBookings >= 5 && !badges.includes('earlybird')) {
      newBadges.push({ id: 'earlybird', icon: '☀️', name: 'Early Bird', desc: '5 Morning Slots' })
    }
    if (totalBookings >= 20 && !badges.includes('persistent')) {
      newBadges.push({ id: 'persistent', icon: '🏋️', name: 'Power Lifter', desc: '20 Bookings' })
    }
    if (totalBookings >= 5 && !badges.includes('starter')) {
      newBadges.push({ id: 'starter', icon: '⭐', name: 'Getting Started', desc: '5 Bookings' })
    }
    if (totalBookings >= 10 && !badges.includes('dedicated')) {
      newBadges.push({ id: 'dedicated', icon: '💪', name: 'Dedicated', desc: '10 Bookings' })
    }

    if (newBadges.length > 0) {
      setBadges(prev => [...prev, ...newBadges.map(b => b.id)])
      setNewBadge(newBadges[0])
      setShowConfetti(Date.now())
      setTimeout(() => setNewBadge(null), 3000)
    }
  }

  const handleReserve = (slotId) => {
    const slot = slots.find(s => s.id === slotId)
    
    setSlots(prev => prev.map(s => {
      if (s.id === selectedSlot && s.count > 0) {
        return { ...s, count: s.count - 1 }
      }
      if (s.id === slotId) {
        return { ...s, count: s.count + 1 }
      }
      return s
    }))
    
    setSelectedSlot(slotId)
    
    const newHistory = [...bookingHistory, {
      date: new Date().toISOString().split('T')[0],
      time: slot.startTime,
      period: slot.period,
      slotId
    }]
    setBookingHistory(newHistory)
    checkBadges(newHistory)
    
    setTimeout(() => setShowReflection(true), 500)
  }

  const handleCancel = () => {
    if (selectedSlot) {
      setSlots(prev => prev.map(slot => {
        if (slot.id === selectedSlot && slot.count > 0) {
          return { ...slot, count: slot.count - 1 }
        }
        return slot
      }))
      setSelectedSlot(null)
    }
  }

  const handleReflection = (mood) => {
    setReflections(prev => [...prev, {
      date: new Date().toISOString().split('T')[0],
      mood
    }])
    setShowReflection(false)
  }

  return (
    <ThemeProvider>
      <LayoutWrapper>
        <UserPanel 
          selectedSlot={selectedSlot}
          slots={slots}
          onCancel={handleCancel}
          onOpenBreathing={() => setShowBreathing(true)}
          streak={getStreak()}
          badges={badges}
          bookingCount={bookingHistory.length}
          reflections={reflections}
        />
        <SlotCalendar 
          slots={slots}
          selectedSlot={selectedSlot}
          onReserve={handleReserve}
          reflections={reflections}
        />
      </LayoutWrapper>

      <AnimatePresence>
        {showBreathing && (
          <BreathingModal onClose={() => setShowBreathing(false)} />
        )}
        {showReflection && (
          <ReflectionModal onSubmit={handleReflection} onClose={() => setShowReflection(false)} />
        )}
      </AnimatePresence>

      <Confetti trigger={showConfetti} />

      <AnimatePresence>
        {newBadge && (
          <div className="fixed top-4 right-4 z-50 bg-[var(--accent-color)]/20 border border-[var(--accent-color)]/30 rounded-2xl p-4 backdrop-blur-lg">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{newBadge.icon}</span>
              <div>
                <p className="accent-text font-medium">Badge Unlocked!</p>
                <p className="text-white text-sm">{newBadge.name}</p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

function generateDefaultSlots() {
  const morningHours = [6, 7, 8, 9, 10]
  const eveningHours = [17, 18, 19, 20, 21]
  
  const formatTime = (h) => {
    const period = h >= 12 ? 'PM' : 'AM'
    const hour = h > 12 ? h - 12 : h
    return `${hour}:00 ${period}`
  }

  const createSlot = (hour, period) => ({
    id: `slot-${hour}`,
    startTime: formatTime(hour),
    endTime: formatTime(hour + 1),
    period,
    count: Math.floor(Math.random() * 18) + 2,
    capacity: 20,
  })

  return [
    ...morningHours.map(h => createSlot(h, 'morning')),
    ...eveningHours.map(h => createSlot(h, 'evening')),
  ]
}

export default App
