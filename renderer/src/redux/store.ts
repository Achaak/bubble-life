import { configureStore } from '@reduxjs/toolkit'
import activitiesReducer from './reducers/activitiesSlice'
import bubbleReducer from './reducers/bubbleSlice'

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    bubble: bubbleReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
