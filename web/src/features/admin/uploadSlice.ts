import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../app/store.ts'

export const selectUpload = (state: RootState) => state.upload

// Create an initial state value for the reducer, with that type
const initialState: [] = []

// Create the slice and pass in the initial state
const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {}
})

export default uploadSlice.reducer