import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IPlayer {
  ottoneuID: string;
  name: string;
}

// Remove blank spaces, punctuation and apply camelCase for simpler coding
// Optimally do this for the database as well. For now can map the API call
// to the local store.
export interface IRoster {
  ottoneuID: string;
  name: string;
  mlbTeam?: string;
  position: string;
  salary: string;
  fgMajorLeagueID?: string;
  fgMinorLeagueID?: string;
  teamID: string;
  teamName: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

// Create an initial state value for the reducer, with that type
const initialState: IRoster[] = [
  { 
    ottoneuID: '1',
    name: 'Otto Neu',
    mlbTeam: 'St. Louis Browns',
    position: 'SS',
    salary: '$1',
    fgMajorLeagueID: '1009525',
    teamID: '3213',
    teamName: 'Hold the Mayo',
  }
]

// Create the slice and pass in the initial state
const rostersSlice = createSlice({
  name: 'rosters',
  initialState,
  reducers: {
    playerAdded(state, action: PayloadAction<IRoster>) {
      state.push(action.payload)
    }
  }
})

export const { playerAdded } = rostersSlice.actions

// Export the generated reducer function
export default rostersSlice.reducer