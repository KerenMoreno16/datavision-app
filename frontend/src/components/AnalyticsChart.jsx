import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from 'recharts'

const data = [
  { month: 'Jan', revenue: 24000 },
  { month: 'Feb', revenue: 31000 },
  { month: 'Mar', revenue: 28000 },
  { month: 'Apr', revenue: 42000 },
  { month: 'May', revenue: 51000 },
  { month: 'Jun', revenue: 61000 },
]

function AnalyticsChart() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <div className="mb-8">

        <h3 className="text-3xl font-black text-white">
          Revenue Growth
        </h3>

        <p className="text-slate-400 mt-2">
          Monthly performance overview
        </p>

      </div>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>
              <linearGradient
                id="colorRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#22d3ee"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#22d3ee"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#22d3ee"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              strokeWidth={4}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}

export default AnalyticsChart