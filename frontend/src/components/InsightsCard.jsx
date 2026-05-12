import {
  TrendingUp,
  DollarSign,
  Target,
} from 'lucide-react'

function InsightsCard() {

  const insights = [
    {
      icon: TrendingUp,
      title: 'Sales Increased',
      value: '+18%',
    },

    {
      icon: DollarSign,
      title: 'Revenue Growth',
      value: '$84K',
    },

    {
      icon: Target,
      title: 'Conversion Rate',
      value: '28.4%',
    },
  ]

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h3 className="text-3xl font-black text-white mb-8">
        Key Insights
      </h3>

      <div className="space-y-6">

        {insights.map((item) => {

          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="flex items-center justify-between bg-white/5 rounded-2xl p-5"
            >

              <div className="flex items-center gap-4">

                <div className="bg-cyan-400/10 p-4 rounded-2xl">
                  <Icon className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    {item.title}
                  </p>

                  <p className="text-slate-400 text-sm">
                    Last 30 days
                  </p>
                </div>

              </div>

              <p className="text-2xl font-black text-cyan-400">
                {item.value}
              </p>

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default InsightsCard