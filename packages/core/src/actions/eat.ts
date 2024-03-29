import { dateToMs, socket, random } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import {
  addActionInWaitingList,
  addSaturation,
  addWeight,
  getBubble,
  hasActionByName,
  removeInventoryItem,
  updateMemoryValue,
} from '@bubble/store';
import type {
  Action as ActionType,
  SocketEvents,
  AddEatActionInWaitingList,
} from '@bubble/types';
import dayjs from 'dayjs';

import { Action } from '../action.js';

const SATURATION_INCREASE_DELAY = dateToMs({ seconds: 1 });
const UPDATE_INTERVAL = dateToMs({ seconds: 1 });

export const addEatActionInWaitingList = ({
  start,
  duration,
  importance,
}: AddEatActionInWaitingList): void => {
  addActionInWaitingList({
    name: 'eat',
    start: start,
    duration: duration,
    startFunction: 'eat:start',
    updateFunction: 'eat:update',
    endFunction: 'eat:end',
    cancelFunction: 'eat:cancel',
    importance: importance,
    elements: {
      onomatopoeia: {
        name: 'eat',
      },
    },
  });
};

export const addEatActionInWaitingListDefault = (): void => {
  const startEat = dayjs();
  const endEat = dayjs(startEat).add(
    BubbleConfig.actions.eat.duration +
      random({
        min: BubbleConfig.actions.eat.durationMargin * -1,
        max: BubbleConfig.actions.eat.durationMargin,
        round: true,
      }),
    'minute'
  );

  addEatActionInWaitingList({
    start: startEat.valueOf(),
    duration: endEat.valueOf() - startEat.valueOf(),
    importance: 2,
  });
};

export class ActionEat extends Action {
  lastRenderUpdateEat: number;

  socket?: SocketEvents;

  constructor() {
    super({
      name: 'eat',
    });

    this.lastRenderUpdateEat = 0;

    this.actions = [
      {
        name: 'eat:start',
        function: this.handleStartEat,
      },
      {
        name: 'eat:update',
        function: this.handleUpdateEat,
      },
      {
        name: 'eat:end',
        function: this.handleEndEat,
      },
      {
        name: 'eat:cancel',
        function: this.handleCancelEat,
      },
    ];

    this.socket = socket({
      localhost: true,
    });

    this.socket.on('addEatActionInWaitingList', addEatActionInWaitingList);
    this.socket.on(
      'addEatActionInWaitingListDefault',
      addEatActionInWaitingListDefault
    );
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < UPDATE_INTERVAL) {
      return;
    }

    const {
      vitals: { saturation },
    } = getBubble();

    if (saturation <= 0 && !hasActionByName({ name: 'eat' })) {
      addEatActionInWaitingListDefault();
    }

    this.lastRender = timestamp;
  };

  getSaturationPerSecond = (action: ActionType): number => {
    const {
      vitals: { saturation },
    } = getBubble();

    const timestamp = Date.now();

    const saturationEnd = action.memory?.saturationEnd as number;

    // Get time left
    const actionEnd = action.start + action.duration;
    const timeLeft = (actionEnd - timestamp) / SATURATION_INCREASE_DELAY;

    // Get saturation missing
    const saturationMissing = saturationEnd - saturation;

    // Get saturation per second
    const saturationPerSecond = saturationMissing / timeLeft;

    return saturationPerSecond;
  };

  handleStartEat = (action: ActionType): void => {
    const {
      vitals: { saturation },
    } = getBubble();

    const recoverValue =
      (action.memory?.recoverValue as number | undefined) ||
      BubbleConfig.actions.eat.recover +
        random({
          min: BubbleConfig.actions.eat.recoverMargin * -1,
          max: BubbleConfig.actions.eat.recoverMargin,
          round: false,
        });

    const saturationEnd =
      saturation + BubbleConfig.vitals.saturation.max * recoverValue;

    if (action.id) {
      updateMemoryValue({
        actionId: action.id,
        memoryId: 'saturationEnd',
        value:
          saturationEnd > BubbleConfig.vitals.saturation.max
            ? BubbleConfig.vitals.saturation.max
            : saturationEnd,
      });
    }
  };

  handleUpdateEat = (action: ActionType): void => {
    const timestamp = Date.now();
    if (timestamp - this.lastRenderUpdateEat < SATURATION_INCREASE_DELAY) {
      return;
    }

    addSaturation({
      value: this.getSaturationPerSecond(action),
    });

    this.lastRenderUpdateEat = timestamp;
  };

  handleEndEat = (): void => {
    addWeight({
      value: random({
        min: BubbleConfig.actions.eat.minWeightToAdd,
        max: BubbleConfig.actions.eat.maxWeightToAdd,
      }),
    });

    removeInventoryItem({ type: 'food', number: 1 });
  };

  handleCancelEat = (): void => {
    removeInventoryItem({ type: 'food', number: 1 });
  };
}
