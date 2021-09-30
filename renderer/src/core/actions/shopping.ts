import { Action } from '../action'
import { BubbleConfig } from '@configs/bubble'
import { addActionInAwaitList, hasAction } from '@src/redux/reducers/actions/utils'
import { addInventoryItem, hasInventoryItem } from '@src/redux/reducers/bubble/utils'
import { dateToMs, random } from '@src/utils'
import dayjs from 'dayjs'

export class Action_shopping extends Action {
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
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    if (!hasInventoryItem({ type: 'food', number: 1 }) && !hasAction({ name: 'shopping' })) {
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
