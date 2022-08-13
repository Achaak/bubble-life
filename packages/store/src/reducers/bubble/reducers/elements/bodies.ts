import type { PayloadAction } from '@reduxjs/toolkit';
import { initialBubbleState } from '../../state';
import type {
  BubbleStateElementsBodyAction,
  BubbleStateElementsBodyItemList,
  BubbleState,
} from '@bubble/types';

export const addBodyInList = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsBodyItemList>
): void => {
  state.elements.body.list = [...state.elements.body.list, action.payload];
};

export const removeBodyInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.body.list = state.elements.body.list.filter(
    (item) => item.id !== action.payload.id
  );
};

export const resetBody = (state: BubbleState): void => {
  state.elements.body = initialBubbleState.elements.body;
};

export const setActionBody = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsBodyAction>
): void => {
  state.elements.body.action = action.payload;
};

export const resetActionBody = (state: BubbleState): void => {
  state.elements.body.action = null;
};
