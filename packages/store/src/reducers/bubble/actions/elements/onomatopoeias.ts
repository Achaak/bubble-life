import type {
  AddOnomatopoeiaInList,
  SetActionOnomatopoeia,
} from '@bubble/types';
import { bubbleActions } from '../../index';
import { store } from '../../../../store';

export const addOnomatopoeiaInList = (
  onomatopoeia: AddOnomatopoeiaInList
): void => {
  store.dispatch(bubbleActions.addOnomatopoeiaInList(onomatopoeia));
};

export const removeOnomatopoeiaInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeOnomatopoeiaInList({ id }));
};

export const resetOnomatopoeia = (): void => {
  store.dispatch(bubbleActions.resetOnomatopoeia());
};

export const setActionOnomatopoeia = (
  onomatopoeia: SetActionOnomatopoeia
): void => {
  store.dispatch(bubbleActions.setActionOnomatopoeia(onomatopoeia));
};

export const resetActionOnomatopoeia = (): void => {
  store.dispatch(bubbleActions.resetActionOnomatopoeia());
};
