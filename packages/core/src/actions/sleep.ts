import { dateToMs } from '@bubble/common'
import { random } from '@bubble/common'
import { BubbleConfig } from '@bubble/configs/bubble'
import { addActionInAwaitList, addTiredness, getBubble, hasActionByName } from '@bubble/store'
import type { Action as ActionType } from '@bubble/types'
import dayjs from 'dayjs'

import { Action } from '../action'

const TIREDNESS_INCREASE_DELAY = dateToMs({ seconds: 1 })

export class ActionSleep extends Action {
  lastRenderUpdateSleep: number

  constructor() {
    super()

    this.lastRenderUpdateSleep = 0

    this.name = 'sleep'
    this.actions = [
      {
        name: 'sleep:start',
        function: this.handleStartSleep,
      },
      {
        name: 'sleep:update',
        function: this.handleUpdateSleep,
      },
      {
        name: 'sleep:end',
        function: this.handleEndSleep,
      },
      {
        name: 'sleep:cancel',
        function: this.handleCancelSleep,
      },
    ]
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    if (!hasActionByName({ name: 'sleep' })) {
      const hourStart = parseInt(BubbleConfig.actions.sleep.startAt.split(':')[0]) || 0
      const minuteStart = parseInt(BubbleConfig.actions.sleep.startAt.split(':')[1]) || 0

      const currentDate = dayjs()

      let startSleep = dayjs(
        new Date(
          currentDate.year(),
          currentDate.month(),
          currentDate.date(),
          hourStart,
          random({
            min: minuteStart + BubbleConfig.actions.sleep.durationMargin,
            max: minuteStart - BubbleConfig.actions.sleep.durationMargin,
            round: true,
          }),
          0
        )
      )

      if (currentDate.valueOf() > startSleep.valueOf()) {
        startSleep = startSleep.add(1, 'day')
      }

      const endSleep = dayjs(startSleep).add(
        BubbleConfig.actions.sleep.duration +
          random({
            min: BubbleConfig.actions.sleep.durationMargin * -1,
            max: BubbleConfig.actions.sleep.durationMargin,
            round: true,
          }),
        'minute'
      )

      addActionInAwaitList({
        name: 'sleep',
        start: startSleep.valueOf(),
        duration: endSleep.valueOf() - startSleep.valueOf(),
        startFunction: 'sleep:start',
        endFunction: 'sleep:end',
        updateFunction: 'sleep:update',
        cancelFunction: 'sleep:cancel',
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

  getTirednessPerSecond = (action: ActionType): number => {
    const {
      vitals: { tiredness },
    } = getBubble()

    const timestamp = Date.now()

    // Get tiredness missing
    const tirednessMissing = BubbleConfig.vitals.tiredness.max - tiredness

    return (
      tirednessMissing / ((action.start + action.duration - timestamp) / TIREDNESS_INCREASE_DELAY)
    )
  }

  handleStartSleep = (): void => {
    // NOTHING
  }

  handleUpdateSleep = (action: ActionType): void => {
    const timestamp = Date.now()
    if (timestamp - this.lastRenderUpdateSleep < TIREDNESS_INCREASE_DELAY) {
      return
    }

    addTiredness({
      value: this.getTirednessPerSecond(action),
    })

    this.lastRenderUpdateSleep = timestamp
  }

  handleEndSleep = (): void => {
    // NOTHING
  }

  handleCancelSleep = (): void => {
    // NOTHING
  }
}
