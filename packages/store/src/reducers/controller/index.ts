import { createSlice } from '@reduxjs/toolkit'

import * as reducers from './reducers/index'
import { initialControllerState } from './state'

export * from './selects'

export const controllerSlice = createSlice({
  name: 'controller',
  initialState: initialControllerState,
  reducers: reducers,
})

export const controllerActions = controllerSlice.actions
