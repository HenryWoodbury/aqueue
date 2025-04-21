import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul>
      <li><Link to="/">Draft</Link></li>
      <li><Link to="/teams/3213">Team 3213</Link></li>
      <li><Link to="/admin">Admin</Link></li>
    </ul>
  )
}

export { NavBar }