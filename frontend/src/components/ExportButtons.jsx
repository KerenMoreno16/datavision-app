import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

function ExportButtons({ analytics }) {

  function exportCSV() {
    const rows = analytics.sales_by_category

    const csvContent = [
      ['Category', 'Sales'],
      ...rows.map((item) => [
        item.Category,
        item.Sales,
      ]),
    ]
      .map((e) => e.join(','))
      .join('\n')

    const blob = new Blob(
      [csvContent],
      { type: 'text/csv' }
    )

    const url =
      window.URL.createObjectURL(blob)

    const a = document.createElement('a')

    a.href = url
    a.download = 'analytics-report.csv'

    a.click()
  }

  function exportPDF() {
    const doc = new jsPDF()

    doc.setFontSize(20)

    doc.text(
      'Analytics Dashboard Report',
      14,
      20
    )

    autoTable(doc, {
      startY: 35,

      head: [['Category', 'Sales']],

      body: analytics.sales_by_category.map(
        (item) => [
          item.Category,
          `$${item.Sales.toFixed(2)}`,
        ]
      ),
    })

    doc.save('analytics-report.pdf')
  }

  return (
    <div className="flex gap-4">

      <button
        onClick={exportCSV}
        className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-2xl hover:scale-105 transition"
      >
        Export CSV
      </button>

      <button
        onClick={exportPDF}
        className="bg-white/10 border border-white/10 text-white font-semibold px-6 py-3 rounded-2xl hover:scale-105 transition"
      >
        Export PDF
      </button>

    </div>
  )
}

export default ExportButtons