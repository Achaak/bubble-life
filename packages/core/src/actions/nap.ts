import { dateToMs, socket, random } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import {
  addActionInWaitingList,
  addTiredness,
  getBubble,
  hasActionByName,
  updateMemoryValue,
} from '@bubble/store';
import type {
  Action as ActionType,
  SocketEvents,
  AddNapActionInWaitingList,
} from '@bubble/types';
import dayjs from 'dayjs';

import { Action } from '../action.js';

const TIREDNESS_INCREASE_DELAY = dateToMs({ seconds: 1 });

export const addNapActionInWaitingList = ({
  start,
  duration,
  importance,
}: AddNapActionInWaitingList): void => {
  addActionInWaitingList({
    name: 'nap',
    start: start,
    duration: duration,
    startFunction: 'nap:start',
    endFunction: 'nap:end',
    updateFunction: 'nap:update',
    cancelFunction: 'nap:cancel',
    elements: {
      eyes: {
        name: 'sleep',
      },
      onomatopoeia: {
        name: 'sleep',
      },
    },
    importance: importance,
  });
};

export const addNapActionInWaitingListDefault = (): void => {
  const startNap = dayjs();
  const endNap = dayjs(startNap).add(
    BubbleConfig.actions.nap.duration +
      random({
        min: BubbleConfig.actions.nap.durationMargin * -1,
        max: BubbleConfig.actions.nap.durationMargin,
        round: true,
      }),
    'minute'
  );

  addNapActionInWaitingList({
    start: startNap.valueOf(),
    duration: endNap.valueOf() - startNap.valueOf(),
    importance: 2,
  });
};

export class ActionNap extends Action {
  lastRenderUpdateNap: number;

  recoverValue: number;

  socket?: SocketEvents;

  constructor() {
    super({
      name: 'nap',
    });

    this.lastRenderUpdateNap = 0;
    this.recoverValue = 0;

    this.actions = [
      {
        name: 'nap:start',
        function: this.handleStartNap,
      },
      {
        name: 'nap:update',
        function: this.handleUpdateNap,
      },
      {
        name: 'nap:end',
        function: this.handleEndNap,
      },
      {
        name: 'nap:cancel',
        function: this.handleCancelNap,
      },
    ];

    this.socket = socket({
      localhost: true,
    });

    this.socket.on('addNapActionInWaitingList', addNapActionInWaitingList);
    this.socket.on(
      'addNapActionInWaitingListDefault',
      addNapActionInWaitingListDefault
    );
  }

  update = (timestamp: number): void => {
    const {
      vitals: { tiredness },
    } = getBubble();

    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return;
    }

    if (tiredness <= 0 && !hasActionByName({ name: 'nap' })) {
      addNapActionInWaitingListDefault();
    }

    this.lastRender = timestamp;
  };

  getTirednessPerSecond = (action: ActionType): number => {
    const {
      vitals: { tiredness },
    } = getBubble();

    const timestamp = Date.now();

    const tirednessEnd = action.memory?.tirednessEnd as number;

    // Get time left
    const actionEnd = action.start + action.duration;
    const timeLeft = (actionEnd - timestamp) / TIREDNESS_INCREASE_DELAY;

    // Get tiredness missing
    const tirednessMissing = tirednessEnd - tiredness;

    // Get tiredness per second
    const tirednessPerSecond = tirednessMissing / timeLeft;

    return tirednessPerSecond;
  };

  handleStartNap = (action: ActionType): void => {
    const {
      vitals: { tiredness },
    } = getBubble();

    const recoverValue =
      (action.memory?.recoverValue as number | undefined) ||
      BubbleConfig.actions.nap.recover +
        random({
          min: BubbleConfig.actions.nap.recoverMargin * -1,
          max: BubbleConfig.actions.nap.recoverMargin,
          round: false,
        });

    const tirednessEnd =
      tiredness + BubbleConfig.vitals.tiredness.max * recoverValue;

    if (action.id) {
      updateMemoryValue({
        actionId: action.id,
        memoryId: 'tirednessEnd',
        value:
          tirednessEnd > BubbleConfig.vitals.tiredness.max
            ? BubbleConfig.vitals.tiredness.max
            : tirednessEnd,
      });
    }
  };

  handleUpdateNap = (action: ActionType): void => {
    const timestamp = Date.now();
    if (timestamp - this.lastRenderUpdateNap < TIREDNESS_INCREASE_DELAY) {
      return;
    }

    addTiredness({
      value: this.getTirednessPerSecond(action),
    });

    this.lastRenderUpdateNap = timestamp;
  };

  handleEndNap = (): void => {
    // Reset recover value
    this.recoverValue = 0;
  };

  handleCancelNap = (): void => {
    // Reset recover value
    this.recoverValue = 0;
  };
}
