import type { AddEyesInList, SetActionEyes } from '@bubble/types';
import { bubbleActions } from '../../index';
import { store } from '../../../../store';

export const addEyesInList = (eyes: AddEyesInList): void => {
  store.dispatch(bubbleActions.addEyesInList(eyes));
};

export const removeEyesInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeEyesInList({ id }));
};

export const resetEyes = (): void => {
  store.dispatch(bubbleActions.resetEyes());
};

export const setActionEyes = (eyes: SetActionEyes): void => {
  store.dispatch(bubbleActions.setActionEyes(eyes));
};

export const resetActionEyes = (): void => {
  store.dispatch(bubbleActions.resetActionEyes());
};
