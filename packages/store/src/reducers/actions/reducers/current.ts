import type { Action, ActionsState } from '@bubble/types';
import type { PayloadAction } from '@reduxjs/toolkit';

export const setCurrentAction = (
  state: ActionsState,
  action: PayloadAction<Action>
): void => {
  state.current = action.payload;
};

export const resetCurrentAction = (state: ActionsState): void => {
  state.current = null;
};
