import type { AddBodyInList, SetActionBody } from '@bubble/types';
import { bubbleActions } from '../../index';
import { store } from '../../../../store';

export const addBodyInList = (body: AddBodyInList): void => {
  store.dispatch(bubbleActions.addBodyInList(body));
};

export const removeBodyInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeBodyInList({ id }));
};

export const resetBody = (): void => {
  store.dispatch(bubbleActions.resetBody());
};

export const setActionBody = (body: SetActionBody): void => {
  store.dispatch(bubbleActions.setActionBody(body));
};

export const resetActionBody = (): void => {
  store.dispatch(bubbleActions.resetActionBody());
};
