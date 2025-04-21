import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks'

// For testing I can use the roster reducer, but will eventually
const Team = () => {
  const { teamId } = useParams()

  const team = useAppSelector(state =>
    state.rosters.find(roster => roster.teamID === teamId)
  )

  if (!team) {
    return (
      <section>
        <h2>Team not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{team.teamName}</h2>
        <p>Rosters here</p>
      </article>
    </section>
  )
}

export { Team }