import type { HasMessageInCurrentById, SetCurrentMessage } from '@bubble/types';
import { getBubble } from '../index';
import { bubbleActions } from '../../index';
import { store } from '../../../../store';

export const setCurrentMessage = (action: SetCurrentMessage): void => {
  store.dispatch(bubbleActions.setCurrentMessage(action));
};

export const resetCurrentMessage = (): void => {
  store.dispatch(bubbleActions.resetCurrentMessage());
};

export const hasMessageInCurrentById = ({
  id,
}: HasMessageInCurrentById): boolean => {
  const {
    message: { current },
  } = getBubble();

  return current?.id === id;
};
