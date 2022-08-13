import type { InventoryItem } from '@bubble/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { BubbleState } from '@bubble/types';

export const addInventoryItem = (
  state: BubbleState,
  action: PayloadAction<{
    type: InventoryItem;
    number: number;
  }>
): void => {
  // If inventory item exist
  if (state.inventory.some((item) => item.type === action.payload.type)) {
    state.inventory = state.inventory.map((item) => {
      if (item.type === action.payload.type) {
        return {
          ...item,
          stock: item.stock + action.payload.number,
        };
      }

      return item;
    });
  } else {
    // If inventory item not exist
    state.inventory = [
      ...state.inventory,
      {
        stock: action.payload.number,
        type: action.payload.type,
      },
    ];
  }
};

export const removeInventoryItem = (
  state: BubbleState,
  action: PayloadAction<{
    type: InventoryItem;
    number: number;
  }>
): void => {
  // Remove stock
  state.inventory = state.inventory.map((item) => {
    if (item.type === action.payload.type) {
      return {
        ...item,
        stock: item.stock - action.payload.number,
      };
    }

    return item;
  });

  // Remove stock under 0
  state.inventory = state.inventory.filter((item) => {
    return item.stock > 0;
  });
};
