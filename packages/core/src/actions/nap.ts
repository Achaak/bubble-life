import { dateToMs } from '@bubble/common'
import { random } from '@bubble/common'
import { BubbleConfig } from '@bubble/configs/bubble'
import { addActionInAwaitList, addTiredness, getBubble, hasActionByName } from '@bubble/store'
import type { Action as ActionType } from '@bubble/types'
import dayjs from 'dayjs'

import { Action } from '../action'

const TIREDNESS_INCREASE_DELAY = dateToMs({ seconds: 1 })

export class ActionNap extends Action {
  lastRenderUpdateNap: number

  recoverValue: number

  constructor() {
    super()

    this.lastRenderUpdateNap = 0
    this.recoverValue = 0

    this.name = 'nap'
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
    ]
  }

  update = (timestamp: number): void => {
    const {
      vitals: { tiredness },
    } = getBubble()

    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    if (tiredness <= 0 && !hasActionByName({ name: 'nap' })) {
      const startNap = dayjs()

      const endNap = dayjs(startNap).add(
        BubbleConfig.actions.nap.duration +
          random({
            min: BubbleConfig.actions.nap.durationMargin * -1,
            max: BubbleConfig.actions.nap.durationMargin,
            round: true,
          }),
        'minute'
      )

      addActionInAwaitList({
        name: 'nap',
        start: startNap.valueOf(),
        duration: endNap.valueOf() - startNap.valueOf(),
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
        importance: 2,
      })
    }

    this.lastRender = timestamp
  }

  initNapRecoverValue = (): void => {
    this.recoverValue =
      BubbleConfig.actions.nap.recover +
      random({
        min: BubbleConfig.actions.nap.recoverMargin * -1,
        max: BubbleConfig.actions.nap.recoverMargin,
        round: false,
      })
  }

  getTirednessPerSecond = (action: ActionType): number => {
    const {
      vitals: { tiredness },
    } = getBubble()

    const timestamp = Date.now()

    // Get tiredness missing
    const tirednessMissing = BubbleConfig.vitals.tiredness.max * this.recoverValue - tiredness

    return (
      tirednessMissing / ((action.start + action.duration - timestamp) / TIREDNESS_INCREASE_DELAY)
    )
  }

  handleStartNap = (): void => {
    // Init recover value
    this.initNapRecoverValue()
  }

  handleUpdateNap = (action: ActionType): void => {
    const timestamp = Date.now()
    if (timestamp - this.lastRenderUpdateNap < TIREDNESS_INCREASE_DELAY) {
      return
    }

    // Init recover value
    if (!this.recoverValue) {
      this.initNapRecoverValue()
    }

    addTiredness({
      value: this.getTirednessPerSecond(action),
    })

    this.lastRenderUpdateNap = timestamp
  }

  handleEndNap = (): void => {
    // Reset recover value
    this.recoverValue = 0
  }

  handleCancelNap = (): void => {
    // Reset recover value
    this.recoverValue = 0
  }
}
