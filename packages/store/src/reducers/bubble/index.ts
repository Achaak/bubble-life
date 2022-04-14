import { createSlice } from '@reduxjs/toolkit'

import * as reducers from './reducers/index.js'
import { initialBubbleState } from './state.js'

export * from './selects.js'

export const bubbleSlice = createSlice({
  name: 'bubble',
  initialState: initialBubbleState,
  reducers: reducers,
})

export const bubbleActions = bubbleSlice.actions
