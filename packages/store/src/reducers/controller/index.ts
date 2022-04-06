import { createSlice } from '@reduxjs/toolkit'

import * as reducers from './reducers'
import { initialControllerState } from './state'

export * from './selects'

const controllerSlice = createSlice({
  name: 'controller',
  initialState: initialControllerState,
  reducers: reducers,
})

export const controllerActions = controllerSlice.actions

export default controllerSlice.reducer
