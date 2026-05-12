import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Sidebar from './components/Sidebar'

import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Customers from './pages/Customers'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>

      <div className="flex min-h-screen bg-[#07111f]">

        <Sidebar />

        <main className="flex-1 p-10">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/customers"
              element={<Customers />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  )
}

export default App