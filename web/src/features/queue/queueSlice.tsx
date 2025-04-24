import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store.ts'

export interface IPlayer {
  ottoneuID: string;
  name?: string;
  salary?: string;
  teamId?: string;
}

const initialState: IPlayer[] = [
  { 
    ottoneuID: '1',
    name: 'Otto Neu',
    salary: '$3',
    teamId: '3213',
  }
]

export const selectQueue = (state: RootState, teamId: string | null) =>
  state.queue.filter(queue => queue.teamId === teamId)

// Create the slice and pass in the initial state
const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<IPlayer>) {
      const { ottoneuID } = action.payload
      const playerInQueue = state.find(player => player.ottoneuID === ottoneuID)
      if (!playerInQueue)
        state.push(action.payload)
    },
    editPlayer(state, action: PayloadAction<IPlayer>) {
      const { ottoneuID, salary } = action.payload
      const playerInQueue = state.find(player => player.ottoneuID === ottoneuID)
      if (playerInQueue) {
        playerInQueue.salary = salary
      }      
    },
    removePlayer(state, action: PayloadAction<IPlayer>) {
      const { ottoneuID } = action.payload
      return state.filter(player => player.ottoneuID !== ottoneuID)
    }
  },
// Could add selectors here, then export them with queueSlice.selectors
})

export const { addPlayer, editPlayer, removePlayer } = queueSlice.actions

// Export the generated reducer function
export default queueSlice.reducer