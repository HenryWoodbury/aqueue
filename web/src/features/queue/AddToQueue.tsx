import React from 'react'
import { nanoid } from '@reduxjs/toolkit'

import { useAppDispatch } from '../../app/hooks'

// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
interface AddToQueueFormFields extends HTMLFormControlsCollection {
  player: HTMLInputElement
}

interface AddToQueueFormElements extends HTMLFormElement {
  readonly elements: AddToQueueFormFields
}

import { type IPlayer, addPlayer } from './queueSlice';

const AddToQueue = () => {

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<AddToQueueFormElements>) => {
    // Prevent server submission
    e.preventDefault()
    const { elements } = e.currentTarget
    const name = elements.player.value
    // Create the post object and dispatch the `postAdded` action
    const newPlayer: IPlayer = {
      ottoneuID: nanoid(),
      name
    }
    dispatch(addPlayer(newPlayer))
    e.currentTarget.reset()
  }

  return (
    <section>
      <h2>Add a Player to your Queue</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="player">Player:</label>
        <input type="text" id="player" defaultValue="" required />
        <button>Save Post</button>
      </form>
    </section>
  )
}

export { AddToQueue }