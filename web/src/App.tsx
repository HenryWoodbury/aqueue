import { BrowserRouter as Router, Route, Routes } from 'react-router'
// https://reactrouter.com/start/declarative/routing

import { NavBar } from './components/NavBar'
import { Team } from './features/teams/Team.tsx';
import { Admin } from './features/admin/Admin.tsx'
import { Draft } from './pages/draft/Draft.tsx'

function App() {

  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Draft />} />
          <Route path="/teams/:teamId" element={<Team />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
