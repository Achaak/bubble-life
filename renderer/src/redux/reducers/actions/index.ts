import * as reducers from './reducers'
import { initialActionsState } from './state'
import { createSlice } from '@reduxjs/toolkit'

export * from './selects'

const actionsSlice = createSlice({
  name: 'actions',
  initialState: initialActionsState,
  reducers: reducers,
})

export const {
  resetActionsReducer: resetActionsAction,

  addActionInListReducer: addActionInListAction,
  sortActionReducer: sortActionAction,
  resetcurrentReducer: resetcurrentAction,
  addcurrentReducer: addcurrentAction,
  removeActionInListReducer: removeActionInListAction,
} = actionsSlice.actions

export default actionsSlice.reducer
