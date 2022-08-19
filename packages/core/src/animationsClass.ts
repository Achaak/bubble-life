import {
  addAnimationInList,
  removeAnimationInList,
  resetActionAnimation,
  resetAnimation,
  setActionAnimation,
} from '@bubble/store';
import type { SocketEvents } from '@bubble/types';
import { socket } from '@bubble/common';

export class Animations {
  socket?: SocketEvents;

  constructor() {
    this.socket = socket({
      localhost: true,
    });

    this.socket.on('resetAnimation', resetAnimation);
    this.socket.on('addAnimationInList', addAnimationInList);
    this.socket.on('removeAnimationInList', removeAnimationInList);
    this.socket.on('setActionAnimation', setActionAnimation);
    this.socket.on('resetActionAnimation', resetActionAnimation);
  }
}
