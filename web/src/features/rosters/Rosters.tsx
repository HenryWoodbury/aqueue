import { useAppSelector } from '../../app/hooks'

const Rosters = () => {
  // Select the `state.posts` value from the store into the component
  const rosters = useAppSelector(state => state.rosters)

  const rosterList = rosters.map(player => (
    <li key={player.ottoneuID}>{player.name}, {player.salary}</li>
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