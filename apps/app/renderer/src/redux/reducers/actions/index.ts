import { createSlice } from '@reduxjs/toolkit'

import * as reducers from './reducers'
import { initialActionsState } from './state'

export * from './selects'

const actionsSlice = createSlice({
  name: 'actions',
  initialState: initialActionsState,
  reducers: reducers,
})

export const actionsActions = actionsSlice.actions

export default actionsSlice.reducer
