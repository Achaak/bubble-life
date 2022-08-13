import type { Message } from '@bubble/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { BubbleState } from '@bubble/types';

export const setCurrentMessage = (
  state: BubbleState,
  action: PayloadAction<Message>
): void => {
  state.message.current = action.payload;
};

export const resetCurrentMessage = (state: BubbleState): void => {
  state.message.current = null;
};
