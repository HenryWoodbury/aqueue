import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from './api.ts'

export const uploadApi = createApi({
  reducerPath: 'uploadApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    uploadRosters: build.mutation({
      query: (file) => {
        const formData = new FormData();
        console.info(file);
        formData.append('file', file);
        return {
          url: 'csv/upload',
          method: 'POST',
          body: formData
        }
      },
    }),
  }),
})

export const { useUploadRostersMutation } = uploadApi

