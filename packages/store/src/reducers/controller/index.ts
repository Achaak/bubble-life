import { createSlice } from '@reduxjs/toolkit'

import * as reducers from './reducers/index.js'
import { initialControllerState } from './state.js'

export * from './selects'

const controllerSlice = createSlice({
  name: 'controller',
  initialState: initialControllerState,
  reducers: reducers,
})

export const controllerActions = controllerSlice.actions

export default controllerSlice.reducer
