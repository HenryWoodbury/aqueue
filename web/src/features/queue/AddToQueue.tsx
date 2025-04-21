import React from 'react'
import { nanoid } from '@reduxjs/toolkit'

import { useAppDispatch } from '../../app/hooks'

import { type IPlayer, addPlayer } from './queueSlice';

// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
export interface AddToQueueFormFields extends HTMLFormControlsCollection {
  player: HTMLInputElement
  salary: HTMLInputElement
}

interface AddToQueueFormElements extends HTMLFormElement {
  readonly elements: AddToQueueFormFields
}

const AddToQueue = ({ teamID }: { teamID: string }) => {

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<AddToQueueFormElements>) => {
    e.preventDefault()
    const { elements } = e.currentTarget
    const name = elements.player.value
    const salary = elements.salary.value
    // Create the post object and dispatch the `postAdded` action
    const newPlayer: IPlayer = {
      ottoneuID: nanoid(),
      name,
      salary,
      teamID
    }
    dispatch(addPlayer(newPlayer))
    e.currentTarget.reset()
  }

  return (
    <section>
      <h2>Add a Player to your Queue</h2>
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