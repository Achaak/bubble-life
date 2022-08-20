import type { ActionsState } from '@bubble/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { initialActionsState } from '../state';

export * from './cancelList';
export * from './current';
export * from './waitingList';

export const resetActions = (state: ActionsState): void => {
  for (const key in state) {
    // @ts-expect-error Never
    delete state[key];
  }

  state.waitingList = initialActionsState.waitingList;
  state.current = initialActionsState.current;
  state.cancelList = initialActionsState.cancelList;
};

export const setActions = (
  state: ActionsState,
  action: PayloadAction<{ actions: ActionsState }>
): void => {
  state.waitingList = action.payload.actions.waitingList;
  state.current = action.payload.actions.current;
  state.cancelList = action.payload.actions.cancelList;
};

export const updateMemoryValue = (
  state: ActionsState,
  action: PayloadAction<{ memoryId: string; value: unknown; actionId: string }>
): void => {
  // Update current action memory value
  if (state.current) {
    if (!state.current.memory) {
      state.current.memory = {};
    }

    state.current.memory[action.payload.memoryId] = action.payload.value;
  }

  // Update wait list memory value
  state.waitingList = state.waitingList.map((item) => {
    if (item.id === action.payload.actionId) {
      if (!item.memory) {
        item.memory = {};
      }

      item.memory[action.payload.memoryId] = action.payload.value;
    }

    return item;
  });

  // Update cancel list memory value
  state.cancelList = state.cancelList.map((item) => {
    if (item.id === action.payload.actionId) {
      if (!item.memory) {
        item.memory = {};
      }

      item.memory[action.payload.memoryId] = action.payload.value;
    }

    return item;
  });
};

export const deleteMemoryValue = (
  state: ActionsState,
  action: PayloadAction<{ memoryId: string; actionId: string }>
): void => {
  // Update current action memory value
  if (state.current) {
    if (!state.current.memory) {
      state.current.memory = {};
    }

    delete state.current.memory[action.payload.memoryId];
  }

  // Update wait list memory value
  state.waitingList = state.waitingList.map((item) => {
    if (item.id === action.payload.actionId) {
      if (!item.memory) {
        item.memory = {};
      }

      delete item.memory[action.payload.memoryId];
    }

    return item;
  });

  // Update cancel list memory value
  state.cancelList = state.cancelList.map((item) => {
    if (item.id === action.payload.actionId) {
      if (!item.memory) {
        item.memory = {};
      }

      delete item.memory[action.payload.memoryId];
    }

    return item;
  });
};
