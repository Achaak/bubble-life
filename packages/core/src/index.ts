import { Actions } from './actionsClass.js';
import { Animations } from './animationsClass.js';
import { Elements } from './elementsClass.js';
import { Inventory } from './inventoryClass.js';
import { Message } from './messageClass.js';
import { Vitals } from './vitalsClass.js';
import { initWindow } from './window.js';

export * from './actions/index.js';
export * from './animations/index.js';

export class BubbleCore {
  lastRender: number;

  loopRunning: boolean;

  actions: Actions;

  animations: Animations;

  elements: Elements;

  message: Message;

  inventory: Inventory;

  vitals: Vitals;

  constructor() {
    this.lastRender = 0;
    this.loopRunning = false;

    this.actions = new Actions();
    this.vitals = new Vitals();
    this.message = new Message();
    this.animations = new Animations();
    this.elements = new Elements();
    this.inventory = new Inventory();

    initWindow();

    this.startLoop();
  }

  update = async (timestamp: number): Promise<void> => {
    // ACTIONS
    this.actions.update(timestamp);

    // VITALS
    this.vitals.update(timestamp);

    // Message
    this.message.update();
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
