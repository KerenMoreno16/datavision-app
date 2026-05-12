import AnalyticsChart from '../components/AnalyticsChart'
import InsightsCard from '../components/InsightsCard'

function Analytics() {
  return (
    <div>

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-5xl font-black text-white">
          Advanced Analytics
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Deep business intelligence insights and trends.
        </p>

      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <p className="text-slate-400 text-lg">
            Revenue
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            $1.2M
          </h2>

          <p className="text-green-400 mt-4">
            +18.2%
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <p className="text-slate-400 text-lg">
            Customers
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            8.4K
          </h2>

          <p className="text-green-400 mt-4">
            +12.5%
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <p className="text-slate-400 text-lg">
            Conversion
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            28%
          </h2>

          <p className="text-green-400 mt-4">
            +6.8%
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <p className="text-slate-400 text-lg">
            Retention
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            91%
          </h2>

          <p className="text-green-400 mt-4">
            +4.3%
          </p>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <div className="xl:col-span-2">
          <AnalyticsChart />
        </div>

        <InsightsCard />

      </div>

    </div>
  )
}

export default Analytics