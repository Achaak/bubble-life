import { createSlice } from '@reduxjs/toolkit';

import * as reducers from './reducers/index';
import { initialBubbleState } from './state';

export * from './selects';

export const bubbleSlice = createSlice({
  name: 'bubble',
  initialState: initialBubbleState,
  reducers: reducers,
});

export const bubbleActions = bubbleSlice.actions;
