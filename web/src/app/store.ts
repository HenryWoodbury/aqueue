import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

import authReducer from '../features/auth/authSlice'
import queueReducer from '../features/queue/queueSlice'
import rostersReducer from '../features/rosters/rostersSlice'
import teamReducer from '../features/teams/teamSlice'
import uploadReducer from '../features/admin/uploadSlice'
import { rostersApi } from '../services/rosters'
import { uploadApi } from '../services/upload'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    queue: queueReducer,
    rosters: rostersReducer,
    team: teamReducer,
    upload: uploadReducer,
    [rostersApi.reducerPath]: rostersApi.reducer,
    [uploadApi.reducerPath]: uploadApi.reducer,
  },
  // getDefaultMiddleware streamlines adding custom middleware to the middleware automatically generated by configureStore
  // https://redux-toolkit.js.org/api/getDefaultMiddleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      rostersApi.middleware, 
      uploadApi.middleware,
    ),
})

// Infer the type of `store`
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>