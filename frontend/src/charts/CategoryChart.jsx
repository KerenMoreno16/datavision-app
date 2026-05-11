import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function CategoryChart({ data }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white">
          Sales by Category
        </h3>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>

          <XAxis dataKey="Category" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Bar
            dataKey="Sales"
            fill="#22d3ee"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CategoryChart