import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks';

import { selectTeam } from '../features/teams/teamSlice';

const NavBar = () => {
  const teamId = useAppSelector(selectTeam) || '';
  const teamLink = `/teams/${teamId}`;
  return (
    <ul>
      <li><Link to="/">Draft</Link></li>
      <li><Link to={teamLink}>Team</Link></li>
      <li><Link to="/admin">Admin</Link></li>
    </ul>
  )
}

export { NavBar }