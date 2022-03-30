import { dateToMs } from '@bubble/common'
import { random } from '@bubble/common'
import { BubbleConfig } from '@bubble/configs/bubble'
import {
  addActionInAwaitList,
  addSaturation,
  addWeight,
  getBubble,
  hasActionByName,
  removeInventoryItem,
} from '@bubble/store'
import type { Action as ActionType } from '@bubble/types'
import dayjs from 'dayjs'

import { Action } from '../action'

const SATURATION_INCREASE_DELAY = dateToMs({ seconds: 1 })

export const addEatActionInAwaitList = ({
  start,
  duration,
  importance,
}: {
  start: number
  duration: number
  importance: 1 | 2 | 3
}): void => {
  addActionInAwaitList({
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
  })
}

export const addEatActionInAwaitListDefault = (): void => {
  const startEat = dayjs()
  const endEat = dayjs(startEat).add(
    BubbleConfig.actions.eat.duration +
      random({
        min: BubbleConfig.actions.eat.durationMargin * -1,
        max: BubbleConfig.actions.eat.durationMargin,
        round: true,
      }),
    'minute'
  )

  addEatActionInAwaitList({
    start: startEat.valueOf(),
    duration: endEat.valueOf() - startEat.valueOf(),
    importance: 2,
  })
}

export class ActionEat extends Action {
  lastRenderUpdateEat: number

  constructor() {
    super()

    this.lastRenderUpdateEat = 0

    this.name = 'eat'
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
    ]
  }

  update = (timestamp: number): void => {
    const {
      vitals: { saturation },
    } = getBubble()

    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    if (saturation <= 0 && !hasActionByName({ name: 'eat' })) {
      addEatActionInAwaitListDefault()
    }

    this.lastRender = timestamp
  }

  getSaturationPerSecond = (action: ActionType): number => {
    const {
      vitals: { saturation },
    } = getBubble()

    const timestamp = Date.now()

    const saturationEnd = action.memory?.saturationEnd as number

    // Get time left
    const actionEnd = action.start + action.duration
    const timeLeft = (actionEnd - timestamp) / SATURATION_INCREASE_DELAY

    // Get saturation missing
    const saturationMissing = saturationEnd - saturation

    // Get saturation per second
    const saturationPerSecond = saturationMissing / timeLeft

    return saturationPerSecond
  }

  handleStartEat = (): void => {
    // NOTHING
  }

  handleUpdateEat = (action: ActionType): void => {
    const timestamp = Date.now()
    if (timestamp - this.lastRenderUpdateEat < SATURATION_INCREASE_DELAY) {
      return
    }

    addSaturation({
      value: this.getSaturationPerSecond(action),
    })

    this.lastRenderUpdateEat = timestamp
  }

  handleEndEat = (): void => {
    addWeight({
      value: random({
        min: BubbleConfig.actions.eat.minWeightToAdd,
        max: BubbleConfig.actions.eat.maxWeightToAdd,
      }),
    })

    removeInventoryItem({ type: 'food', number: 1 })
  }

  handleCancelEat = (): void => {
    removeInventoryItem({ type: 'food', number: 1 })
  }
}
