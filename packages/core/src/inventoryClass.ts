import { socket } from '@bubble/common';
import {
  addInventoryItem,
  hasInventoryItem,
  removeInventoryItem,
} from '@bubble/store';
import type { SocketEvents } from '@bubble/types';

export class Inventory {
  socket?: SocketEvents;

  constructor() {
    this.socket = socket({
      localhost: true,
    });

    this.socket.on('addInventoryItem', addInventoryItem);
    this.socket.on('removeInventoryItem', removeInventoryItem);
    this.socket.on('hasInventoryItem', hasInventoryItem);
  }
}
