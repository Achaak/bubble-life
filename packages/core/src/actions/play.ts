import { dateToMs, socket } from '@bubble/common';
import { random } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import {
  addActionInWaitingList,
  addHappiness,
  getBubble,
  hasActionByName,
  updateMemoryValue,
} from '@bubble/store';
import type {
  Action as ActionType,
  SocketEvents,
  AddPlayActionInWaitingList,
} from '@bubble/types';
import dayjs from 'dayjs';

import { Action } from '../action.js';

const HAPPINESS_INCREASE_DELAY = dateToMs({ seconds: 1 });

export const addPlayActionInWaitingList = ({
  start,
  duration,
  importance,
  memory,
}: AddPlayActionInWaitingList): void => {
  addActionInWaitingList({
    name: 'play',
    start: start,
    duration: duration,
    startFunction: 'play:start',
    updateFunction: 'play:update',
    endFunction: 'play:end',
    cancelFunction: 'play:cancel',
    importance: importance,
    animation: {
      name: 'bounce',
    },
    memory: memory,
  });
};

export const addPlayActionInWaitingListDefault = (): void => {
  const startPlay = dayjs();
  const endPlay = dayjs(startPlay).add(
    BubbleConfig.actions.play.duration +
      random({
        min: BubbleConfig.actions.play.durationMargin * -1,
        max: BubbleConfig.actions.play.durationMargin,
        round: true,
      }),
    'minute'
  );

  addPlayActionInWaitingList({
    start: startPlay.valueOf(),
    duration: endPlay.valueOf() - startPlay.valueOf(),
    importance: 2,
  });
};

export class ActionPlay extends Action {
  lastRenderUpdatePlay: number;

  socket?: SocketEvents;

  constructor() {
    super();

    this.lastRenderUpdatePlay = 0;

    this.name = 'play';
    this.actions = [
      {
        name: 'play:start',
        function: this.handleStartPlay,
      },
      {
        name: 'play:update',
        function: this.handleUpdatePlay,
      },
      {
        name: 'play:end',
        function: this.handleEndPlay,
      },
      {
        name: 'play:cancel',
        function: this.handleCancelPlay,
      },
    ];

    this.socket = socket({
      localhost: true,
    });

    this.socket.on('addPlayActionInWaitingList', addPlayActionInWaitingList);
    this.socket.on(
      'addPlayActionInWaitingListDefault',
      addPlayActionInWaitingListDefault
    );
  }

  update = (timestamp: number): void => {
    const {
      vitals: { happiness },
    } = getBubble();

    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return;
    }

    if (happiness <= 0 && !hasActionByName({ name: 'play' })) {
      addPlayActionInWaitingListDefault();
    }

    this.lastRender = timestamp;
  };

  getHappinessPerSecond = (action: ActionType): number => {
    const {
      vitals: { happiness },
    } = getBubble();

    const timestamp = Date.now();

    const happinessEnd = action.memory?.happinessEnd as number;

    // Get time left
    const actionEnd = action.start + action.duration;
    const timeLeft = (actionEnd - timestamp) / HAPPINESS_INCREASE_DELAY;

    // Get happiness missing
    const happinessMissing = happinessEnd - happiness;

    // Get happiness per second
    const happinessPerSecond = happinessMissing / timeLeft;

    return happinessPerSecond;
  };

  handleStartPlay = (action: ActionType): void => {
    const {
      vitals: { happiness },
    } = getBubble();

    const recoverValue =
      (action.memory?.recoverValue as number | undefined) ||
      BubbleConfig.actions.play.recover +
        random({
          min: BubbleConfig.actions.play.recoverMargin * -1,
          max: BubbleConfig.actions.play.recoverMargin,
          round: false,
        });

    const happinessEnd =
      happiness + BubbleConfig.vitals.happiness.max * recoverValue;

    if (action.id) {
      updateMemoryValue({
        actionId: action.id,
        memoryId: 'happinessEnd',
        value:
          happinessEnd > BubbleConfig.vitals.happiness.max
            ? BubbleConfig.vitals.happiness.max
            : happinessEnd,
      });
    }
  };

  handleUpdatePlay = (action: ActionType): void => {
    const timestamp = Date.now();
    if (timestamp - this.lastRenderUpdatePlay < 1000) {
      return;
    }

    addHappiness({
      value: this.getHappinessPerSecond(action),
    });

    this.lastRenderUpdatePlay = timestamp;
  };

  handleEndPlay = (): void => {
    // NOTHING
  };

  handleCancelPlay = (): void => {
    // NOTHING
  };
}
