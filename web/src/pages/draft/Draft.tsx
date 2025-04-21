import { AddToQueue } from '../../features/queue/AddToQueue.tsx'
import { Queue } from '../../features/queue/Queue.tsx'
import { Rosters } from '../../features/rosters/Rosters.tsx'

const Draft = () => {
  return (
    <>
      <Rosters />
      <AddToQueue teamID="3213" />
      <Queue teamID="3213" />
    </>
  )
}

export { Draft }