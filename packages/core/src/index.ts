import { dateToMs, socket } from '@bubble/common';
import { getActions, getBubble, getSettings, resetBubble } from '@bubble/store';
import type { SocketEvents } from '@bubble/types';
import { Actions } from './actionsClass.js';
import { Animations } from './animationsClass.js';
import { Elements } from './elementsClass.js';
import { Inventory } from './inventoryClass.js';
import { Message } from './messageClass.js';
import { Settings } from './settingsClass.js';
import { Vitals } from './vitalsClass.js';
import { initWindow } from './window.js';

export * from './actions/index.js';
export * from './animations/index.js';

const UPDATE_INTERVAL_EMIT_SOCKET = dateToMs({ seconds: 1 });

export class BubbleCore {
  lastRender: number;

  loopRunning: boolean;

  actions: Actions;

  animations: Animations;

  elements: Elements;

  message: Message;

  inventory: Inventory;

  vitals: Vitals;

  settings: Settings;

  socket?: SocketEvents;

  lastRenderEmitSocket: number;

  constructor() {
    this.lastRender = 0;
    this.lastRenderEmitSocket = 0;
    this.loopRunning = false;

    this.actions = new Actions();
    this.vitals = new Vitals();
    this.message = new Message();
    this.animations = new Animations();
    this.elements = new Elements();
    this.inventory = new Inventory();
    this.settings = new Settings();

    initWindow();

    this.startLoop();

    this.socket = socket({
      localhost: true,
    });

    this.socket.on('resetBubble', resetBubble);
    this.socket.on('reloadPage', () => window.location.reload());
  }

  updateEmitSocket = (timestamp: number): void => {
    if (timestamp - this.lastRenderEmitSocket < UPDATE_INTERVAL_EMIT_SOCKET) {
      return;
    }

    // Emit update store
    this.socket?.emit('actionsStore', getActions());
    this.socket?.emit('bubbleStore', getBubble());
    this.socket?.emit('settingsStore', getSettings());

    this.lastRenderEmitSocket = timestamp;
  };

  update = async (timestamp: number): Promise<void> => {
    // ACTIONS
    this.actions.update(timestamp);

    // VITALS
    this.vitals.update(timestamp);

    // Message
    this.message.update();

    // Emit socket
    this.updateEmitSocket(timestamp);
  };

  loop = (timestamp?: number): void => {
    this.update(timestamp || 0);

    this.lastRender = timestamp || 0;

    if (this.loopRunning) {
      requestAnimationFrame(this.loop.bind(this));
    }
  };

  // Start the loop
  startLoop = (): void => {
    this.loopRunning = true;
    this.loop();
  };

  // Stop the loop
  stopLoop = (): void => {
    this.loopRunning = false;
  };
}
