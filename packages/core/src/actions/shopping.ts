import { dateToMs } from '@bubble/common/src/date'
import { random } from '@bubble/common/src/random'
import { BubbleConfig } from '@bubble/configs/bubble'
import { addActionInAwaitList, addInventoryItem, hasAction, hasInventoryItem } from '@bubble/store'
import dayjs from 'dayjs'

import { Action } from '../action'

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

      addActionInAwaitList({
        name: 'shopping',
        start: startShopping.valueOf(),
        duration: endShopping.valueOf() - startShopping.valueOf(),
        startFunction: 'shopping:start',
        updateFunction: 'shopping:update',
        endFunction: 'shopping:end',
        cancelFunction: 'shopping:cancel',
        importance: 2,
        elements: {
          clothe: {
            name: 'coat',
          },
        },
      })
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
