import { createSlice } from '@reduxjs/toolkit';

import * as reducers from './reducers/index';
import { initialSettingsState } from './state';

export * from './selects';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialSettingsState,
  reducers: reducers,
});

export const settingsActions = settingsSlice.actions;
