import React from 'react'
import { nanoid } from '@reduxjs/toolkit'

import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { type IPlayer, addPlayer } from './queueSlice';
import { selectTeam } from '../teams/teamSlice'

// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
export interface AddToQueueFormFields extends HTMLFormControlsCollection {
  player: HTMLInputElement
  salary: HTMLInputElement
}

interface AddToQueueFormElements extends HTMLFormElement {
  readonly elements: AddToQueueFormFields
}

const AddToQueue = () => {

  const teamId = useAppSelector(state => selectTeam(state))
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<AddToQueueFormElements>) => {
    e.preventDefault()
    if (!teamId) return;
    const { elements } = e.currentTarget
    const name = elements.player.value
    const salary = elements.salary.value
    // Create the post object and dispatch the `postAdded` action
    const newPlayer: IPlayer = {
      ottoneuID: nanoid(), // this will come from a selected player eventually
      name,
      salary,
      teamId: teamId
    }
    dispatch(addPlayer(newPlayer))
    e.currentTarget.reset()
  }

  return (
    <section>
      <h2>Add a Player to your Queue</h2>
      <p>Note: Need to disable if a team hasn't been selected.</p>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="player">Player: </label>
          <input type="text" id="player" defaultValue="" required />
        </p>
        <p>
          <label htmlFor="salary">Salary: </label>
          <input type="text" id="salary" defaultValue="" required />
        </p>
        <button type="submit">Update Queue</button>
      </form>
    </section>
  )
}

export { AddToQueue }