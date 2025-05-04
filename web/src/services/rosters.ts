import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IRoster } from '../types/rosters.ts'
import { BASE_URL } from './api.ts'

export const rostersApi = createApi({
  reducerPath: 'rostersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getRosters: build.query<IRoster[], void>({
      query: () => `rosters`,
    }),
    getRosterByTeamId: build.query<IRoster[], string>({
      query: (teamId) => `rosters/${teamId}`,
    }),
  }),
})

export const { useGetRostersQuery, useGetRosterByTeamIdQuery  } = rostersApi

