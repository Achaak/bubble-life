import type { SetCurrentUser, ControllerState } from '@bubble/types';
import { controllerActions } from '../index';
import { store } from '../../../store';

export const getController = (): ControllerState => store.getState().controller;

export const resetController = (): void => {
  store.dispatch(controllerActions.resetController());
};

export const setController = (controller: ControllerState): void => {
  store.dispatch(controllerActions.setController({ controller }));
};

export const setCurrentUser = (currentUser: SetCurrentUser): void => {
  store.dispatch(controllerActions.setCurrentUser(currentUser));
};
