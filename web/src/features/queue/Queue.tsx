import React, { useState } from 'react'

import { IPlayer } from '../../types/rosters'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { editPlayer, removePlayer, selectQueueByTeam } from './queueSlice'
import { selectTeam } from '../teams/teamSlice'

// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
export interface EditQueueFormFields extends HTMLFormControlsCollection {
  salary: HTMLInputElement
}

interface EditQueueFormElements extends HTMLFormElement {
  readonly elements: EditQueueFormFields
}

const Queue = () => {
  const [player, setplayer] = useState<IPlayer | null>(null)

  const dispatch = useAppDispatch()

//  https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization
  const teamId = useAppSelector(state => selectTeam(state))
  const queue = useAppSelector(state => selectQueueByTeam(state, teamId))

  const handleRemovePlayer = (playerId: string) => {
    dispatch(removePlayer({ ottoneuId: playerId }))
  }

  const handleSubmit = (e: React.FormEvent<EditQueueFormElements>) => {
    e.preventDefault()
    const { elements } = e.currentTarget
    const salary = elements.salary.value;

    if (salary && player) {
      dispatch(editPlayer({ ottoneuId: player.ottoneuId, salary: salary }))
      setplayer(null);
    }
    e.currentTarget.reset()
  }

  const queueRender = queue.map(player => (
    <li key={player.ottoneuId}>
      {player.playerName}
      {` | `}
      {player.salary}
      {` | `}
      <a role="button" onClick={() => setplayer(player)}>Edit Player</a>
      {` | `}
      <a role="button" onClick={() => handleRemovePlayer(player.ottoneuId)}>Remove Player</a>
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
      { // TODO: Make into a separate component
        player ? (
          <form onSubmit={handleSubmit}>
            <p>
              {player.playerName}
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