import { createSlice } from '@reduxjs/toolkit'

import * as reducers from './reducers'
import { initialBubbleState } from './state'

export * from './selects'

const bubbleSlice = createSlice({
  name: 'bubble',
  initialState: initialBubbleState,
  reducers: reducers,
})

export const bubbleActions = bubbleSlice.actions

export default bubbleSlice.reducer
