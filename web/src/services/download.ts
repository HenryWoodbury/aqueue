import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IRoster } from '../types/rosters.ts'
import { BASE_URL } from './api.ts'

export const downloadApi = createApi({
  reducerPath: 'downloadApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    downloadRosters: build.query<IRoster[], void>({
      query: () => `rosters`,
    }),
    downloadRosterByTeamId: build.query<IRoster[], string>({
      query: (teamId) => `rosters/${teamId}`,
    }),
  }),
})

export const { useDownloadRostersQuery, useDownloadRosterByTeamIdQuery } = downloadApi

