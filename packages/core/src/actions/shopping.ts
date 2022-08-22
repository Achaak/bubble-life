import { dateToMs, socket, random } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import {
  addActionInWaitingList,
  addInventoryItem,
  getStockInventoryItem,
  hasActionByName,
  hasInventoryItem,
} from '@bubble/store';
import type {
  SocketEvents,
  AddShoppingActionInWaitingList,
} from '@bubble/types';
import dayjs from 'dayjs';

import { Action } from '../action.js';

const UPDATE_INTERVAL = dateToMs({ seconds: 1 });

export const addShoppingActionInWaitingList = ({
  start,
  duration,
  importance,
}: AddShoppingActionInWaitingList): void => {
  addActionInWaitingList({
    name: 'shopping',
    start: start,
    duration: duration,
    startFunction: 'shopping:start',
    endFunction: 'shopping:end',
    updateFunction: 'shopping:update',
    cancelFunction: 'shopping:cancel',
    elements: {
      clothe: {
        name: 'coat',
      },
    },
    importance: importance,
  });
};

export const addShoppingActionInWaitingListDefault = (): void => {
  const startShopping = dayjs();
  const endShopping = dayjs(startShopping).add(
    BubbleConfig.actions.shopping.duration +
      random({
        min: BubbleConfig.actions.shopping.durationMargin * -1,
        max: BubbleConfig.actions.shopping.durationMargin,
        round: true,
      }),
    'minute'
  );

  addShoppingActionInWaitingList({
    start: startShopping.valueOf(),
    duration: endShopping.valueOf() - startShopping.valueOf(),
    importance: 2,
  });
};

export class ActionShopping extends Action {
  socket?: SocketEvents;

  constructor() {
    super({
      name: 'shopping',
    });

    this.actions = [
      {
        name: 'shopping:start',
        function: this.handleStartShopping,
      },
      {
        name: 'shopping:update',
        function: this.handleUpdateShopping,
      },
      {
        name: 'shopping:end',
        function: this.handleEndShopping,
      },
      {
        name: 'shopping:cancel',
        function: this.handleCancelShopping,
      },
    ];

    this.socket = socket({
      localhost: true,
    });

    this.socket.on(
      'addShoppingActionInWaitingList',
      addShoppingActionInWaitingList
    );
    this.socket.on(
      'addShoppingActionInWaitingListDefault',
      addShoppingActionInWaitingListDefault
    );
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < UPDATE_INTERVAL) {
      return;
    }

    if (
      (!hasInventoryItem({ type: 'food', number: 1 }) &&
        !hasActionByName({ name: 'shopping' })) ||
      (!hasInventoryItem({ type: 'medication', number: 1 }) &&
        !hasActionByName({ name: 'shopping' }))
    ) {
      addShoppingActionInWaitingListDefault();
    }

    this.lastRender = timestamp;
  };

  handleStartShopping = (): void => {
    // NOTHING
  };

  handleUpdateShopping = (): void => {
    // NOTHING
  };

  handleEndShopping = (): void => {
    const foodStock = getStockInventoryItem({ type: 'food' });
    const foodRestock = 3;

    if (foodStock < foodRestock) {
      addInventoryItem({
        type: 'food',
        number: foodRestock - foodStock,
      });
    }

    const medicationStock = getStockInventoryItem({ type: 'medication' });
    const medicationRestock = 3;

    if (medicationStock < medicationRestock) {
      addInventoryItem({
        type: 'medication',
        number: medicationRestock - medicationStock,
      });
    }
  };

  handleCancelShopping = (): void => {
    // NOTHING
  };
}
