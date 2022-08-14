import type { Action as ActionType } from '@bubble/types';

export class Action {
  lastRender: number;

  name: string;

  actions: {
    name: string;
    function: (action: ActionType) => void;
  }[];

  constructor({ name }: { name: string }) {
    this.lastRender = 0;
    this.name = name;
    this.actions = [];
  }

  update = (timestamp: number): void => {
    this.lastRender = timestamp;
  };
}
