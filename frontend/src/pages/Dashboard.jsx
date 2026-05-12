import { useEffect, useState } from 'react'
import axios from 'axios'

import RevenueChart from '../charts/RevenueChart'
import CategoryChart from '../charts/CategoryChart'
import RegionChart from '../charts/RegionChart'
import Topbar from '../components/Topbar'
import StatCard from '../components/StatCard'
import FilterBar from '../components/FilterBar'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import ExportButtons from '../components/ExportButtons'


function Dashboard() {
  const [analytics, setAnalytics] = useState(null)
  const [region, setRegion] = useState('All')
  const [search, setSearch] = useState('')
  const { darkMode } =
  useContext(ThemeContext)

  const bgClass = darkMode
  ? 'bg-[#07111f]'
  : 'bg-[#f4f7fb]'


  useEffect(() => {
    fetchAnalytics()
  }, [])

  async function fetchAnalytics() {
    const res = await axios.get(
      'http://localhost:5000/analytics'
    )

    setAnalytics(res.data)
  }

  if (!analytics) {

    return (
      <div className="bg-[#07111f] min-h-screen flex items-center justify-center text-white text-3xl">
        Loading analytics...
      </div>
    )
  }
  console.log(analytics.sales_by_region)
  const kpis = analytics.kpis
  const filteredRegions =
  region === 'All'
    ? analytics.sales_by_region
    : analytics.sales_by_region.filter(
        (item) => item.Region === region
      )

  const filteredCategories =
    analytics.sales_by_category.filter((item) =>
      item.Category
        .toLowerCase()
        .includes(search.toLowerCase())
    )

  return (
    <div
      className={`flex min-h-screen transition-all duration-500 ${bgClass}`}
    >

      <main className="flex-1 p-10">

        <Topbar />

        <FilterBar
          region={region}
          setRegion={setRegion}
          search={search}
          setSearch={setSearch}
          regions={analytics.sales_by_region}
        />
        
        <ExportButtons analytics={analytics} />
        {/* KPI GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          <StatCard
            title="Total Sales"
            value={`$${(kpis.total_sales / 1000000).toFixed(1)}M`}
            growth="+18%"
          />

          <StatCard
            title="Total Profit"
            value={`$${(kpis.total_profit / 1000000).toFixed(1)}M`}
            growth="+12%"
          />

          <StatCard
            title="Orders"
            value={kpis.total_orders}
            growth="+9%"
          />

          <StatCard
            title="Avg Discount"
            value={`${kpis.avg_discount}%`}
            growth="+3%"
          />

        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">

          <RevenueChart
            data={analytics.monthly_sales}
          />

          <CategoryChart
            data={filteredCategories}
          />

        </div>

        <div className="mt-10">
          <RegionChart
            data={filteredRegions}
          />
        </div>

      </main>
    </div>
  )
}

export default Dashboard