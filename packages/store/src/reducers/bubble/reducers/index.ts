import type { PayloadAction } from '@reduxjs/toolkit';
import { initialBubbleState } from '../state';
import type { BubbleState } from '@bubble/types';

export * from './vitals/index';
export * from './elements/index';
export * from './animations';
export * from './inventory';
export * from './message/index';

export const resetBubble = (state: BubbleState): void => {
  for (const key in state) {
    // @ts-expect-error Never
    delete state[key];
  }

  state.vitals = initialBubbleState.vitals;
  state.elements = initialBubbleState.elements;
  state.name = initialBubbleState.name;
  state.animation = initialBubbleState.animation;
  state.inventory = initialBubbleState.inventory;
  state.message = initialBubbleState.message;
};

export const setBubble = (
  state: BubbleState,
  action: PayloadAction<{ bubble: BubbleState }>
): void => {
  state.vitals = action.payload.bubble.vitals;
  state.elements = action.payload.bubble.elements;
  state.name = action.payload.bubble.name;
  state.animation = action.payload.bubble.animation;
  state.inventory = action.payload.bubble.inventory;
  state.message = action.payload.bubble.message;
};

export const setName = (
  state: BubbleState,
  action: PayloadAction<string>
): void => {
  state.name = action.payload;
};
