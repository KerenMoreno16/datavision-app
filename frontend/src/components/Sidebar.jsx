import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

function Sidebar() {

  const menuItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/',
    },

    {
      name: 'Analytics',
      icon: BarChart3,
      path: '/analytics',
    },

    {
      name: 'Customers',
      icon: Users,
      path: '/customers',
    },

    {
      name: 'Settings',
      icon: Settings,
      path: '/settings',
    },
  ]

  return (
    <aside className="w-[280px] bg-[#081120] border-r border-white/10 p-8 flex flex-col">

      {/* LOGO */}
      <div className="mb-14">

        <h1 className="text-4xl font-black text-white">
          Data<span className="text-cyan-400">Vision</span>
        </h1>

        <p className="text-slate-400 mt-2">
          Analytics Platform
        </p>

      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-4">

        {menuItems.map((item) => {

          const Icon = item.icon

          return (
            <NavLink
              key={item.name}
              to={item.path}

              className={({ isActive }) =>
                `
                flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group

                ${
                  isActive
                    ? 'bg-cyan-400 text-black font-semibold shadow-lg'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }
                `
              }
            >

              <Icon size={22} />

              <span className="text-lg">
                {item.name}
              </span>

            </NavLink>
          )
        })}

      </nav>

      {/* BOTTOM CARD */}
      <div className="mt-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-6 text-black">

        <h3 className="text-2xl font-black">
          Upgrade Pro
        </h3>

        <p className="mt-3 font-medium">
          Unlock advanced analytics and AI insights.
        </p>

        <button className="mt-6 bg-black text-white px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition">
          Upgrade
        </button>

      </div>

    </aside>
  )
}

export default Sidebar