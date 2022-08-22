import type { SocketEvents } from '@bubble/types';
import dayjs from 'dayjs';
import {
  addMessageInWaitingList,
  getBubble,
  hasMessageInCurrentById,
  hasMessageInWaitingListById,
  removeMessageFromWaitingList,
  resetCurrentMessage,
  setCurrentMessage,
  transferMessageFromWaitingListToCurrent,
} from '@bubble/store';
import shortid from 'shortid';
import { socket } from '@bubble/common';

export class Message {
  lastRender: number;

  socket?: SocketEvents;

  constructor() {
    this.lastRender = 0;

    this.socket = socket({
      localhost: true,
    });

    this.socket.on('newUser', ({ name }) => {
      addMessageInWaitingList({
        content: `Hello ${name} !`,
        duration: 5000,
        importance: 1,
        start: dayjs().valueOf(),
        id: shortid(),
      });
    });

    this.socket.on('message', ({ content, duration, importance, start }) => {
      addMessageInWaitingList({
        content,
        duration: duration || 5000,
        importance: importance || 2,
        start: start || dayjs().valueOf(),
        id: shortid(),
      });
    });

    this.socket.on('setCurrentMessage', setCurrentMessage);
    this.socket.on('resetCurrentMessage', resetCurrentMessage);
    this.socket.on('hasMessageInCurrentById', hasMessageInCurrentById);
    this.socket.on('hasMessageInWaitingListById', hasMessageInWaitingListById);
    this.socket.on('addMessageInWaitingList', addMessageInWaitingList);
    this.socket.on(
      'removeMessageFromWaitingList',
      removeMessageFromWaitingList
    );
    this.socket.on(
      'transferMessageFromWaitingListToCurrent',
      transferMessageFromWaitingListToCurrent
    );
  }

  update = (): void => {
    const {
      message: { waitingList, current },
    } = getBubble();

    // CHECK AWAIT ACTIONS
    if (waitingList.length > 0 || !!current) {
      this.checkWaitingList();
    }
  };

  onStartMessage = (): void => {
    const {
      message: { waitingList },
    } = getBubble();
    const waitingListItem = waitingList[0];

    // Add new current message
    transferMessageFromWaitingListToCurrent({
      id: waitingListItem.id || shortid(),
    });

    console.log('[Start message]', waitingListItem.content);
  };

  checkWaitingList = (): void => {
    const currentDate = dayjs().valueOf();

    const {
      message: { current, waitingList },
    } = getBubble();

    // Verify current message
    if (current) {
      if (current.start + current.duration < currentDate) {
        this.onEndMessage();
      }
    } else if (waitingList.length > 0) {
      const newAction = waitingList[0];

      if (newAction && newAction.start <= currentDate) {
        this.onStartMessage();
      }
    }
  };

  onEndMessage = (): void => {
    const {
      message: { current },
    } = getBubble();

    if (!current) {
      return;
    }

    console.log('[End message]', current.content);

    // Remove current message
    resetCurrentMessage();
  };
}
