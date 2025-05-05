import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../app/store.ts'

export const selectDownload = (state: RootState) => state.upload

// Create an initial state value for the reducer, with that type
const initialState: [] = []

// Create the slice and pass in the initial state
const downloadSlice = createSlice({
  name: 'download',
  initialState,
  reducers: {}
})

export default downloadSlice.reducer