import type { BubbleState } from '@bubble/types';
import { bubbleActions } from '../index';
import { store } from '../../../store';

export * from './elements/index';
export * from './vitals/index';
export * from './animations';
export * from './inventory';
export * from './message/index';

export const getBubble = (): BubbleState => store.getState().bubble;

export const resetBubble = (): void => {
  store.dispatch(bubbleActions.resetBubble());
};

export const setBubble = (bubble: BubbleState): void => {
  store.dispatch(bubbleActions.setBubble({ bubble }));
};
