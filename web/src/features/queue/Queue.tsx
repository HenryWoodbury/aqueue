import { useAppSelector } from '../../app/hooks'

const Queue = () => {
  // Select the `state.posts` value from the store into the component
  const queue = useAppSelector(state => state.queue)

  const queueRender = queue.map(player => (
    <li key={player.ottoneuID}>{player.name}</li>
  ))

  return (
    <section className="rosters">
      <h2>Rosters</h2>
      <ul className="roster-list">
        {queueRender}
      </ul>
    </section>
  )
}

export { Queue };