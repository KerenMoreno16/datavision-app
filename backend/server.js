const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()

app.use(cors())

app.get('/analytics', (req, res) => {
  try {
    const data = fs.readFileSync('analytics.json')

    const analytics = JSON.parse(data)

    res.json(analytics)

  } catch (error) {
    res.status(500).json({
      error: 'Failed to load analytics data',
    })
  }
})

app.listen(5000, () => {
  console.log('Analytics API running on port 5000')
})