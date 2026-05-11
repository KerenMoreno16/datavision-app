import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
} from 'lucide-react'

function Sidebar() {
  return (
    <aside className="w-72 bg-[#081120] border-r border-white/10 min-h-screen p-8">
      
      <div className="mb-16">
        <h1 className="text-4xl font-black text-white">
          Data<span className="text-cyan-400">Vision</span>
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          Analytics Dashboard
        </p>
      </div>

      <nav className="space-y-4">

        <button className="w-full flex items-center gap-4 bg-cyan-400 text-black px-5 py-4 rounded-2xl font-semibold">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button className="w-full flex items-center gap-4 text-slate-300 hover:bg-white/5 px-5 py-4 rounded-2xl transition">
          <BarChart3 size={20} />
          Analytics
        </button>

        <button className="w-full flex items-center gap-4 text-slate-300 hover:bg-white/5 px-5 py-4 rounded-2xl transition">
          <Users size={20} />
          Customers
        </button>

        <button className="w-full flex items-center gap-4 text-slate-300 hover:bg-white/5 px-5 py-4 rounded-2xl transition">
          <Settings size={20} />
          Settings
        </button>

      </nav>
    </aside>
  )
}

export default Sidebar