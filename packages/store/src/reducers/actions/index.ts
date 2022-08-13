import { createSlice } from '@reduxjs/toolkit'

import * as reducers from './reducers/index.js'
import { initialActionsState } from './state.js'

export * from './selects.js'

export const actionsSlice = createSlice({
  name: 'actions',
  initialState: initialActionsState,
  reducers: reducers,
})

export const actionsActions = actionsSlice.actions
