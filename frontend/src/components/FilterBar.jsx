import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function FilterBar({

  region,
  setRegion,
  search,
  setSearch,
  regions
}) {
  const { darkMode } =
  useContext(ThemeContext)
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-10 flex flex-col xl:flex-row gap-4 xl:items-center xl:justify-between">

      <div>
        <h3 className="text-2xl font-bold text-white">
          Analytics Filters
        </h3>

        <p className="text-slate-400 mt-1">
          Filter dashboard insights dynamically
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">

        {/* SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search category..."
          className={`${darkMode
          ? 'bg-whitef172a] border border-white/10 rounded-2xl px-5 py-3 text-white outline-none focus:border-cyan-400'
          : 'bg-[#0f172a]'
          
                }`}/>

        {/* REGION FILTER */}
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-3 text-white outline-none focus:border-cyan-400">
          <option value="All">
            All Regions
          </option>

          {regions.map((item) => (
            <option
              key={item.Region}
              value={item.Region}
            >
              {item.Region}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterBar