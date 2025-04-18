import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IPlayer {
  ottoneuID: string;
  name: string;
}

// Create an initial state value for the reducer, with that type
const initialState: IPlayer[] = [
  { 
    ottoneuID: '1',
    name: 'Otto Neu',
  }
]

// Create the slice and pass in the initial state
const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<IPlayer>) {
      state.push(action.payload)
    }
  }
})

export const { addPlayer } = queueSlice.actions

// Export the generated reducer function
export default queueSlice.reducer