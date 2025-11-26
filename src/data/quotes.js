export const quotes = [
  { text: "The only bad workout is the one that didn't happen.", author: "Unknown" },
  { text: "Your body can stand almost anything. It's your mind you have to convince.", author: "Unknown" },
  { text: "Strength does not come from the body. It comes from the will.", author: "Unknown" },
  { text: "The pain you feel today will be the strength you feel tomorrow.", author: "Unknown" },
  { text: "Don't limit your challenges. Challenge your limits.", author: "Unknown" },
  { text: "Success starts with self-discipline.", author: "Unknown" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { text: "The harder you work, the luckier you get.", author: "Gary Player" },
  { text: "Fitness is not about being better than someone else. It's about being better than you used to be.", author: "Unknown" },
  { text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn" },
  { text: "The body achieves what the mind believes.", author: "Unknown" },
  { text: "Sweat is just fat crying.", author: "Unknown" },
  { text: "No pain, no gain. Shut up and train.", author: "Unknown" },
  { text: "Be stronger than your excuses.", author: "Unknown" },
]

export const getDailyQuote = () => {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000)
  return quotes[dayOfYear % quotes.length]
}
