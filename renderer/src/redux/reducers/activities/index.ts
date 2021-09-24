import * as reducers from './reducers'
import { initialActivitiesState } from './state'
import { createSlice } from '@reduxjs/toolkit'

export * from './selects'

const activitiesSlice = createSlice({
  name: 'activities',
  initialState: initialActivitiesState,
  reducers: reducers,
})

export const {
  resetActivitiesReducer: resetActivitiesAction,

  addActivityInListReducer: addActivityInListAction,
  sortActivityReducer: sortActivityAction,
  resetCurrentActivityReducer: resetCurrentActivityAction,
  addCurrentActivityReducer: addCurrentActivityAction,
  removeActivityInListReducer: removeActivityInListAction,
} = activitiesSlice.actions

export default activitiesSlice.reducer
