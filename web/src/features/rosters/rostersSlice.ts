import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../app/store.ts'
import { IRoster } from '../../types/rosters.ts'

export const selectAllRosters = (state: RootState) => state.rosters

export const selectRostersByTeam = (state: RootState, teamId: string | null) => 
  state.rosters.filter(roster => roster.teamId === teamId)

// Create an initial state value for the reducer, with that type
const initialState: IRoster[] = []

// Create the slice and pass in the initial state
const rostersSlice = createSlice({
  name: 'rosters',
  initialState,
  reducers: {}
})

// Export the generated reducer function
export default rostersSlice.reducer