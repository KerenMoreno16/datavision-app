import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

import {
  Moon,
  Sun,
} from 'lucide-react'

function ThemeToggle() {
  const {
    darkMode,
    setDarkMode,
  } = useContext(ThemeContext)

  return (
    <button
      onClick={() =>
        setDarkMode(!darkMode)
      }
      className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:scale-105 transition"
    >
      {darkMode ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-cyan-400" />
      )}
    </button>
  )
}

export default ThemeToggle