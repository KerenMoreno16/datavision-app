import ThemeToggle from './ThemeToggle'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


  
function Topbar() {

  const { darkMode } =
  useContext(ThemeContext)
  
  return (
    <header className="flex justify-between items-center mb-10">
      
      <div>
        <h1
          className={`text-5xl font-black ${
            darkMode
              ? 'text-white'
              : 'text-[#0f172a]'
          }`}
        >
          Dashboard Overview
        </h1>

        <p
          className={`mt-2 ${
            darkMode
              ? 'text-slate-400'
              : 'text-slate-500'
          }`}
        >
          Monitor your business performance metrics.
        </p>
      </div>

      <div className="flex items-center gap-4">

      <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
        <p className="text-slate-300">
          Welcome back, Keren 👋
        </p>
      </div>

      <ThemeToggle />

    </div>
    </header>
  )
}

export default Topbar