import React, { useState } from 'react'

import { IPlayer } from '../queue/queueSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { editPlayer } from './queueSlice';

// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
export interface EditQueueFormFields extends HTMLFormControlsCollection {
  salary: HTMLInputElement
}

interface EditQueueFormElements extends HTMLFormElement {
  readonly elements: EditQueueFormFields
}

const Queue = ({ teamID }: { teamID: string }) => {
  const [player, setplayer] = useState<IPlayer | null>(null)

  const dispatch = useAppDispatch()

  const queue = useAppSelector(state =>
    state.queue.filter(queue => queue.teamID === teamID)
  )

  const handleSubmit = (e: React.FormEvent<EditQueueFormElements>) => {
    e.preventDefault()
    const { elements } = e.currentTarget
    const salary = elements.salary.value;

    if (salary && player) {
      dispatch(editPlayer({ ottoneuID: player.ottoneuID, salary: salary }))
      setplayer(null);
    }
    e.currentTarget.reset()
  }

  const queueRender = queue.map(player => (
    <li key={player.ottoneuID}>
      {player.name}, 
      {player.salary}
      <a role="button" onClick={()=>setplayer(player)}>Edit Player</a>
    </li>
  ))

  return (
    <section className="rosters">
      <h2>Queue</h2>
      { queue ? 
        (
        <ul className="roster-list">
          {queueRender}
        </ul>
        ) : (
          <p> Queue is empty.</p>
        )
      }
      {
        player ? (
          <form onSubmit={handleSubmit}>
            <p>
              {player.name}
            </p>
            <p>
              <label htmlFor="salary">Salary:</label>
              <input type="text" id="salary" defaultValue={player.salary} />
            </p>
            <button type="reset" onClick={() => setplayer(null)}>Cancel</button>
            <button type="submit">Update Player</button>
          </form>
        ) : null
      }
    </section>
  )
}

export { Queue };