import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IPlayer {
  ottoneuID: string;
  name?: string;
  salary?: string;
  teamID?: string;
}

const initialState: IPlayer[] = [
  { 
    ottoneuID: '1',
    name: 'Otto Neu',
    salary: '$3',
    teamID: '3213',
  }
]

// Create the slice and pass in the initial state
const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<IPlayer>) {
      state.push(action.payload)
    },
    editPlayer(state, action: PayloadAction<IPlayer>) {
      const { ottoneuID, salary } = action.payload
      const playerInQueue = state.find(player => player.ottoneuID === ottoneuID)
      if (playerInQueue) {
        playerInQueue.salary = salary
      }      
    }
  },
// Potentiall add selectors here, then export them with queueSlice.selectors
})

export const { addPlayer, editPlayer } = queueSlice.actions

// Export the generated reducer function
export default queueSlice.reducer