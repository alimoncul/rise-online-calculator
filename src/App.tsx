import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import GearScoreCalculator from './pages/GearScoreCalculator.tsx'
import UpgradeSimulation from './pages/UpgradeSimulation.tsx'

function App() {
  return (
    <Router>
      <div>
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-between">
            <div className="flex space-x-4">
              <Link to="/" className="hover:underline">Gear Score Calculator</Link>
              <Link to="/upgrade-simulation" className="hover:underline">Upgrade Simulation</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<GearScoreCalculator />} />
            <Route path="/upgrade-simulation" element={<UpgradeSimulation />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
