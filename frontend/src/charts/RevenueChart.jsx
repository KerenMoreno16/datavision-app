import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

function RevenueChart({ data }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white">
          Revenue Trend
        </h3>

        <p className="text-slate-400 mt-2">
          Monthly revenue performance
        </p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

          <XAxis dataKey="Month" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="Sales"
            stroke="#22d3ee"
            strokeWidth={4}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart