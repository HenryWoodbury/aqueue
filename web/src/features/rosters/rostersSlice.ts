import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../app/store.ts'

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
  teamId: string;
  teamName: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export const selectAllRosters = (state: RootState) => state.rosters

export const selectRostersByTeam = (state: RootState, teamId: string | null) => 
  state.rosters.filter(roster => roster.teamId === teamId)

// Create an initial state value for the reducer, with that type
const initialState: IRoster[] = [
  { 
    ottoneuID: '1',
    name: 'Otto Neu',
    mlbTeam: 'St. Louis Browns',
    position: 'SS',
    salary: '$1',
    fgMajorLeagueID: '1009525',
    teamId: '1042',
    teamName: 'Hold the Mayo',
  }
]

// Create the slice and pass in the initial state
const rostersSlice = createSlice({
  name: 'rosters',
  initialState,
  reducers: {}
})

// Export the generated reducer function
export default rostersSlice.reducer