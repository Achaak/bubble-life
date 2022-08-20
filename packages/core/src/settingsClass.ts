import { socket } from '@bubble/common';
import { setShowFPS } from '@bubble/store';
import type { SocketEvents } from '@bubble/types';

export class Settings {
  socket?: SocketEvents;

  constructor() {
    this.socket = socket({
      localhost: true,
    });

    this.socket.on('setShowFPS', setShowFPS);
  }
}
