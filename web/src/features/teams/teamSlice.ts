import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store.ts'

export interface ITeam {
  id: string | null;
}

const initialState: ITeam = {
  id: '1042',
}

// Create the slice and pass in the initial state
const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    teamSelected(state, action: PayloadAction<string>) {
      state.id = action.payload
    },
    teamDeselected(state) {
      state.id = null
    }
  }
})

export const selectTeam = (state: RootState) =>
  state.team.id

export const { teamSelected, teamDeselected } = teamSlice.actions

// Export the generated reducer function
export default teamSlice.reducer