import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'



function StatCard({ title, value, growth }) {

  const { darkMode } =
  useContext(ThemeContext)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-3xl p-8 transition shadow-2xl border ${
        darkMode
          ? 'bg-white/5 border-white/10 hover:border-cyan-400/30'
          : 'bg-white border-gray-200 hover:border-cyan-300'
        }`}
    >
      
      <p className={`text-xl ${
        darkMode
          ? 'text-slate-400'
          : 'text-slate-500'
      }`}>
        {title}
      </p>

      <h3 className={`text-3xl xl:text-4xl font-black mt-4 break-words leading-tight ${
        darkMode
          ? 'text-white'
          : 'text-[#0f172a]'
      }`}>
        {value}
      </h3>

      <div className="mt-4 inline-flex bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-xl text-sm">
        {growth}
      </div>
    </motion.div>
  )
}

export default StatCard