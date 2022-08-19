import type { RootState } from '../../store';

export const selectShowFPS = (state: RootState): boolean =>
  state.settings.showFPS;
