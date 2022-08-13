import { createSlice } from '@reduxjs/toolkit';

import * as reducers from './reducers/index';
import { initialActionsState } from './state';

export * from './selects';

export const actionsSlice = createSlice({
  name: 'actions',
  initialState: initialActionsState,
  reducers: reducers,
});

export const actionsActions = actionsSlice.actions;
