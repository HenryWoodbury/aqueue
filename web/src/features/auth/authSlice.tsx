import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../app/store.ts'

export interface IAuthState {
  id: string | null
}

const initialState: IAuthState = {
  id: 'Henry.Woodbury',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn(state, action: PayloadAction<string>) {
      state.id = action.payload
    },
    userLoggedOut(state) {
      state.id = null
    }
  }
})

export const { userLoggedIn, userLoggedOut } = authSlice.actions

export const selectUser = (state: RootState) => state.auth.id

export default authSlice.reducer