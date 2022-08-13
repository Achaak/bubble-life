import { BubbleConfig } from '@bubble/configs';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { BubbleState } from '@bubble/types';

export const setHappiness = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  if (action.payload.value < 0) {
    state.vitals.happiness = 0;
  } else if (action.payload.value > BubbleConfig.vitals.happiness.max) {
    state.vitals.happiness = BubbleConfig.vitals.happiness.max;
  } else {
    state.vitals.happiness = action.payload.value;
  }
};

export const addHappiness = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.happiness + action.payload.value;

  state.vitals.happiness =
    newValue > BubbleConfig.vitals.happiness.max
      ? BubbleConfig.vitals.happiness.max
      : newValue;
};

export const removeHappiness = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.happiness - action.payload.value;

  state.vitals.happiness = newValue < 0 ? 0 : newValue;
};

export const resetHappiness = (state: BubbleState): void => {
  state.vitals.happiness = BubbleConfig.vitals.happiness.default;
};
