import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store.ts'

// Extend the IPlayer in `types`?
export interface IPlayer {
  ottoneuId: string;
  playerName?: string;
  salary?: string;
  teamId?: string;
}

const initialState: IPlayer[] = [
  { 
    ottoneuId: '1',
    playerName: 'Otto Neu',
    salary: '$3',
    teamId: '3213',
  }
]

export const selectQueueByTeam = (state: RootState, teamId: string | null) =>
  state.queue.filter(queue => queue.teamId === teamId)

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<IPlayer>) {
      const { ottoneuId } = action.payload
      const playerInQueue = state.find(player => player.ottoneuId === ottoneuId)
      if (!playerInQueue)
        state.push(action.payload)
    },
    editPlayer(state, action: PayloadAction<IPlayer>) {
      const { ottoneuId, salary } = action.payload
      const playerInQueue = state.find(player => player.ottoneuId === ottoneuId)
      if (playerInQueue) {
        playerInQueue.salary = salary
      }      
    },
    removePlayer(state, action: PayloadAction<IPlayer>) {
      const { ottoneuId } = action.payload
      return state.filter(player => player.ottoneuId !== ottoneuId)
    }
  },
// Could add selectors here, then export them with queueSlice.selectors
})

export const { addPlayer, editPlayer, removePlayer } = queueSlice.actions

export default queueSlice.reducer