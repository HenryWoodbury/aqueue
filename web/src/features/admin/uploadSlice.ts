import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../app/store.ts'

export const selectUpload = (state: RootState) => state.upload

interface IUploadResponse {
  message: string
}

const initialState: IUploadResponse = { message :'' }

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {}
})

export default uploadSlice.reducer