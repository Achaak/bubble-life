import type { SetShowFPS, SettingsState } from '@bubble/types';
import { settingsActions } from '../index';
import { store } from '../../../store';

export const resetSettings = (): void => {
  store.dispatch(settingsActions.resetSettings());
};

export const getSettings = (): SettingsState => store.getState().settings;

export const setShowFPS = (bool: SetShowFPS): void => {
  store.dispatch(settingsActions.setShowFPS(bool));
};
