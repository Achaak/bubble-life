import type { PayloadAction } from '@reduxjs/toolkit';
import { initialSettingsState } from '../state';
import type { SettingsState } from '@bubble/types';

export const resetSettings = (state: SettingsState): void => {
  for (const key in state) {
    // @ts-expect-error Never
    delete state[key];
  }

  state.showFPS = initialSettingsState.showFPS;
};

export const setSettings = (
  state: SettingsState,
  action: PayloadAction<{ settings: SettingsState }>
): void => {
  state.showFPS = action.payload.settings.showFPS;
};

export const setShowFPS = (
  state: SettingsState,
  action: PayloadAction<boolean>
): void => {
  state.showFPS = action.payload;
};
