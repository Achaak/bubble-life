import type {
  AddSaturation,
  RemoveSaturation,
  SetSaturation,
} from '@bubble/types';
import { bubbleActions } from '../../index';
import { store } from '../../../../store';

export const setSaturation = (value: SetSaturation): void => {
  store.dispatch(bubbleActions.setSaturation(value));
};

export const resetSaturation = (): void => {
  store.dispatch(bubbleActions.resetSaturation());
};

export const addSaturation = (value: AddSaturation): void => {
  store.dispatch(bubbleActions.addSaturation(value));
};

export const removeSaturation = (value: RemoveSaturation): void => {
  store.dispatch(bubbleActions.removeSaturation(value));
};
