import type { Message } from '@bubble/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import type { BubbleState } from '@bubble/types';

export const addMessageInWaitingList = (
  state: BubbleState,
  action: PayloadAction<Message>
): void => {
  state.message.waitingList = [
    ...state.message.waitingList,
    {
      ...action.payload,
      id: shortid(),
    },
  ];
};

export const removeMessageFromWaitingList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.message.waitingList = state.message.waitingList.filter(
    (item) => item.id !== action.payload.id
  );
};

export const sortMessagesInWaitingList = (state: BubbleState): void => {
  state.message.waitingList = state.message.waitingList
    .sort((a, b) => {
      if (a.start < b.start) {
        return -1;
      }
      if (a.start > b.start) {
        return 1;
      }
      return 0;
    })
    .sort((a, b) => {
      if (a.importance < b.importance) {
        return -1;
      }
      if (a.importance > b.importance) {
        return 1;
      }
      return 0;
    });
};
