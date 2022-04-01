import { dateToMs } from '@bubble/common'
import { random } from '@bubble/common'
import { BubbleConfig } from '@bubble/configs/bubble'
import {
  addActionInWaitingList,
  addInventoryItem,
  hasActionByName,
  hasInventoryItem,
} from '@bubble/store'
import dayjs from 'dayjs'

import { Action } from '../action'

export const addShoppingActionInWaitingList = ({
  start,
  duration,
  importance,
}: {
  start: number
  duration: number
  importance: 1 | 2 | 3
}): void => {
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
  })
}

export const addShoppingActionInWaitingListDefault = (): void => {
  const startShopping = dayjs()
  const endShopping = dayjs(startShopping).add(
    BubbleConfig.actions.shopping.duration +
      random({
        min: BubbleConfig.actions.shopping.durationMargin * -1,
        max: BubbleConfig.actions.shopping.durationMargin,
        round: true,
      }),
    'minute'
  )

  addShoppingActionInWaitingList({
    start: startShopping.valueOf(),
    duration: endShopping.valueOf() - startShopping.valueOf(),
    importance: 2,
  })
}

export class ActionShopping extends Action {
  constructor() {
    super()

    this.name = 'shopping'
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
    ]
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    if (!hasInventoryItem({ type: 'food', number: 1 }) && !hasActionByName({ name: 'shopping' })) {
      addShoppingActionInWaitingListDefault()
    }

    this.lastRender = timestamp
  }

  handleStartShopping = (): void => {
    // NOTHING
  }

  handleUpdateShopping = (): void => {
    // NOTHING
  }

  handleEndShopping = (): void => {
    addInventoryItem({ type: 'food', number: 3 })
  }

  handleCancelShopping = (): void => {
    // NOTHING
  }
}
