import { useParams } from 'react-router-dom'
import { useGetRosterByTeamIdQuery } from '../../services/rosters'

// import { useAppSelector } from '../../app/hooks'

const Team = () => {
  const { teamId } = useParams()

  const { data, error, isLoading } = useGetRosterByTeamIdQuery(teamId || '')

/*
  const team = useAppSelector(state =>
    state.rosters.find(roster => roster.teamId === teamId)
  )
*/
  const rosterList = data?.map(player => (
    <li key={player.ottoneuId}>{player.playerName}, {player.salary}</li>
  ))

  if (!data) {
    return (
      <section>
        <h2>Team not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{teamId}</h2>
        <ul className="roster-list">
          {rosterList}
        </ul>
      </article>
    </section>
  )
}

export { Team }