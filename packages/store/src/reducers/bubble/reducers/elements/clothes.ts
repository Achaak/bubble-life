import type { PayloadAction } from '@reduxjs/toolkit';
import { initialBubbleState } from '../../state';
import type {
  BubbleStateElementsClotheAction,
  BubbleStateElementsClotheItemList,
  BubbleState,
} from '@bubble/types';

export const addClotheInList = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsClotheItemList>
): void => {
  state.elements.clothe.list = [...state.elements.clothe.list, action.payload];
};

export const removeClotheInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.clothe.list = state.elements.clothe.list.filter(
    (item) => item.id !== action.payload.id
  );
};

export const resetClothe = (state: BubbleState): void => {
  state.elements.clothe = initialBubbleState.elements.clothe;
};

export const setActionClothe = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsClotheAction>
): void => {
  state.elements.clothe.action = action.payload;
};

export const resetActionClothe = (state: BubbleState): void => {
  state.elements.clothe.action = null;
};
