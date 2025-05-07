import { BrowserRouter as Router, Route, Routes } from 'react-router'

import { NavBar } from './components/NavBar'
import { Settings } from './features/settings/Settings.tsx'
import { Team } from './features/teams/Team.tsx';

import { Draft } from './sections/draft/Draft.tsx'
import { Admin } from './sections/admin/Admin.tsx'

function App() {

  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Draft />} />
          <Route path="/teams/:teamId" element={<Team />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
