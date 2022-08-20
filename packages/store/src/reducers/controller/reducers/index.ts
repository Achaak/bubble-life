import type { User } from '@bubble/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { initialControllerState } from '../state';
import type { ControllerState } from '@bubble/types';

export const resetController = (state: ControllerState): void => {
  for (const key in state) {
    // @ts-expect-error Never
    delete state[key];
  }

  state.currentUser = initialControllerState.currentUser;
};

export const setController = (
  state: ControllerState,
  action: PayloadAction<{ controller: ControllerState }>
): void => {
  state.currentUser = action.payload.controller.currentUser;
};

export const setCurrentUser = (
  state: ControllerState,
  action: PayloadAction<User>
): void => {
  state.currentUser = action.payload;
};
