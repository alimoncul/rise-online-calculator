import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import GearCalculator from './pages/GearCalculator.tsx'
import UpgradeSimulation from './pages/UpgradeSimulation.tsx'
import SkillStatCalculator from './pages/SkillStatCalculator.tsx'

function App() {
  return (
    <Router>
      <div>
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-between">
            <div className="flex space-x-4">
              <Link to="/rise-online-calculator" className="hover:underline">Gear Score Calculator</Link>
              <Link to="/upgrade-simulation" className="hover:underline">Upgrade Simulation</Link>
              <Link to="/skill-stat-calculator" className="hover:underline">Skill/Stat Calculator</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/rise-online-calculator" element={<GearCalculator />} />
            <Route path="/upgrade-simulation" element={<UpgradeSimulation />} />
            <Route path="/skill-stat-calculator" element={<SkillStatCalculator />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
