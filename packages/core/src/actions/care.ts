import { dateToMs, socket, random } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import {
  addActionInWaitingList,
  addHealth,
  getBubble,
  hasActionByName,
  removeInventoryItem,
  updateMemoryValue,
} from '@bubble/store';
import type {
  Action as ActionType,
  SocketEvents,
  AddCareActionInWaitingList,
} from '@bubble/types';
import dayjs from 'dayjs';

import { Action } from '../action.js';

const HEALTH_INCREASE_DELAY = dateToMs({ seconds: 1 });
const UPDATE_INTERVAL = dateToMs({ seconds: 1 });

export const addCareActionInWaitingList = ({
  start,
  duration,
  importance,
}: AddCareActionInWaitingList): void => {
  addActionInWaitingList({
    name: 'care',
    start: start,
    duration: duration,
    startFunction: 'care:start',
    updateFunction: 'care:update',
    endFunction: 'care:end',
    cancelFunction: 'care:cancel',
    importance: importance,
    elements: {},
  });
};

export const addCareActionInWaitingListDefault = (): void => {
  const startCare = dayjs();
  const endCare = dayjs(startCare).add(
    BubbleConfig.actions.care.duration +
      random({
        min: BubbleConfig.actions.care.durationMargin * -1,
        max: BubbleConfig.actions.care.durationMargin,
        round: true,
      }),
    'minute'
  );

  addCareActionInWaitingList({
    start: startCare.valueOf(),
    duration: endCare.valueOf() - startCare.valueOf(),
    importance: 2,
  });
};

export class ActionCare extends Action {
  lastRenderUpdateCare: number;

  socket?: SocketEvents;

  constructor() {
    super({
      name: 'care',
    });

    this.lastRenderUpdateCare = 0;

    this.actions = [
      {
        name: 'care:start',
        function: this.handleStartCare,
      },
      {
        name: 'care:update',
        function: this.handleUpdateCare,
      },
      {
        name: 'care:end',
        function: this.handleEndCare,
      },
      {
        name: 'care:cancel',
        function: this.handleCancelCare,
      },
    ];

    this.socket = socket({
      localhost: true,
    });

    this.socket.on('addCareActionInWaitingList', addCareActionInWaitingList);
    this.socket.on(
      'addCareActionInWaitingListDefault',
      addCareActionInWaitingListDefault
    );
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < UPDATE_INTERVAL) {
      return;
    }

    const {
      vitals: { health },
    } = getBubble();

    if (health <= 0 && !hasActionByName({ name: 'care' })) {
      addCareActionInWaitingListDefault();
    }

    this.lastRender = timestamp;
  };

  getHealthPerSecond = (action: ActionType): number => {
    const {
      vitals: { health },
    } = getBubble();

    const timestamp = Date.now();

    const healthEnd = action.memory?.healthEnd as number;

    // Get time left
    const actionEnd = action.start + action.duration;
    const timeLeft = (actionEnd - timestamp) / HEALTH_INCREASE_DELAY;

    // Get health missing
    const healthMissing = healthEnd - health;

    // Get health per second
    const healthPerSecond = healthMissing / timeLeft;

    return healthPerSecond;
  };

  handleStartCare = (action: ActionType): void => {
    const {
      vitals: { health },
    } = getBubble();

    const recoverValue =
      (action.memory?.recoverValue as number | undefined) ||
      BubbleConfig.actions.care.recover +
        random({
          min: BubbleConfig.actions.care.recoverMargin * -1,
          max: BubbleConfig.actions.care.recoverMargin,
          round: false,
        });

    const healthEnd = health + BubbleConfig.vitals.health.max * recoverValue;

    if (action.id) {
      updateMemoryValue({
        actionId: action.id,
        memoryId: 'healthEnd',
        value:
          healthEnd > BubbleConfig.vitals.health.max
            ? BubbleConfig.vitals.health.max
            : healthEnd,
      });
    }
  };

  handleUpdateCare = (action: ActionType): void => {
    const timestamp = Date.now();
    if (timestamp - this.lastRenderUpdateCare < HEALTH_INCREASE_DELAY) {
      return;
    }

    addHealth({
      value: this.getHealthPerSecond(action),
    });

    this.lastRenderUpdateCare = timestamp;
  };

  handleEndCare = (): void => {
    removeInventoryItem({ type: 'medication', number: 1 });
  };

  handleCancelCare = (): void => {
    removeInventoryItem({ type: 'medication', number: 1 });
  };
}
