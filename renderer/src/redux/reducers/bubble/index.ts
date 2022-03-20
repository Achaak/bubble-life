import * as reducers from './reducers'
import { initialBubbleState } from './state'
import { createSlice } from '@reduxjs/toolkit'

export * from './selects'

const bubbleSlice = createSlice({
  name: 'bubble',
  initialState: initialBubbleState,
  reducers: reducers,
})

export const bubbleActions = bubbleSlice.actions

export default bubbleSlice.reducer
