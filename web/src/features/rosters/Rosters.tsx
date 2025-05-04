import { useAppSelector } from '../../app/hooks'
import { useGetRostersQuery } from '../../services/rosters'

const Rosters = () => {

  const { data, error, isLoading } = useGetRostersQuery()
  console.log(data)

  const rosters = useAppSelector(state => state.rosters)

  const rosterList = rosters.map(player => (
    <li key={player.ottoneuId}>{player.playerName}, {player.salary}</li>
  ))

  return (
    <section className="rosters">
      <h2>Rosters</h2>
      <ul className="roster-list">
        {rosterList}
      </ul>
    </section>
  )
}

export { Rosters };