import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts'

const COLORS = [
  '#22d3ee',
  '#3b82f6',
  '#8b5cf6',
  '#06b6d4',
]

function RegionChart({ data }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white">
          Sales by Region
        </h3>
      </div>

      <ResponsiveContainer width="100%" height={350}>

        <PieChart>

          <Pie
            data={data}
            dataKey="Sales"
            nameKey="Region"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>
    </div>
  )
}

export default RegionChart