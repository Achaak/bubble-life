import type {
  AddTiredness,
  RemoveTiredness,
  SetTiredness,
} from '@bubble/types';
import { bubbleActions } from '../../index';
import { store } from '../../../../store';

export const setTiredness = (value: SetTiredness): void => {
  store.dispatch(bubbleActions.setTiredness(value));
};

export const resetTiredness = (): void => {
  store.dispatch(bubbleActions.resetTiredness());
};

export const addTiredness = (value: AddTiredness): void => {
  store.dispatch(bubbleActions.addTiredness(value));
};

export const removeTiredness = (value: RemoveTiredness): void => {
  store.dispatch(bubbleActions.removeTiredness(value));
};
