import { createSlice } from '@reduxjs/toolkit'

import * as reducers from './reducers/index.js'
import { initialBubbleState } from './state.js'

export * from './selects.js'

const bubbleSlice = createSlice({
  name: 'bubble',
  initialState: initialBubbleState,
  reducers: reducers,
})

export const bubbleActions = bubbleSlice.actions

export default bubbleSlice.reducer
