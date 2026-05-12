const customers = [
  {
    id: 1,
    name: 'John Carter',
    company: 'Amazon',
    revenue: '$24,000',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    company: 'Microsoft',
    revenue: '$18,000',
  },
  {
    id: 3,
    name: 'Lucas Brown',
    company: 'Spotify',
    revenue: '$12,000',
  },
]

function Customers() {
  return (
    <div>

      <div className="mb-10">
        <h1 className="text-5xl font-black text-white">
          Customers
        </h1>

        <p className="text-slate-400 mt-2">
          Manage customer relationships.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-white/5">
            <tr>
              <th className="text-left p-6 text-slate-300">
                Customer
              </th>

              <th className="text-left p-6 text-slate-300">
                Company
              </th>

              <th className="text-left p-6 text-slate-300">
                Revenue
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t border-white/10"
              >
                <td className="p-6 text-white">
                  {customer.name}
                </td>

                <td className="p-6 text-slate-300">
                  {customer.company}
                </td>

                <td className="p-6 text-cyan-400 font-semibold">
                  {customer.revenue}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  )
}

export default Customers