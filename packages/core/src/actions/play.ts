import { dateToMs } from '@bubble/common/src/date'
import { random } from '@bubble/common/src/random'
import { BubbleConfig } from '@bubble/configs/bubble'
import {
  addActionInAwaitList,
  addHappiness,
  getBubble,
  hasActionByName,
  updateMemoryValue,
} from '@bubble/store'
import type { Action as ActionType } from '@bubble/types/src/action'
import dayjs from 'dayjs'

import { Action } from '../action'

const HAPPINESS_INCREASE_DELAY = dateToMs({ seconds: 1 })

export const addPlayActionInAwaitList = ({
  start,
  duration,
  importance,
  memory,
}: {
  start: number
  duration: number
  importance: 1 | 2 | 3
  memory?: {
    recoverValue?: number
  }
}): void => {
  addActionInAwaitList({
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
  })
}

export class ActionPlay extends Action {
  lastRenderUpdatePlay: number

  constructor() {
    super()

    this.lastRenderUpdatePlay = 0

    this.name = 'play'
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
    ]
  }

  update = (timestamp: number): void => {
    const {
      vitals: { happiness },
    } = getBubble()

    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    if (happiness <= 0 && !hasActionByName({ name: 'play' })) {
      const startPlay = dayjs()

      const endPlay = dayjs(startPlay).add(
        BubbleConfig.actions.play.duration +
          random({
            min: BubbleConfig.actions.play.durationMargin * -1,
            max: BubbleConfig.actions.play.durationMargin,
            round: true,
          }),
        'minute'
      )

      addActionInAwaitList({
        name: 'play',
        start: startPlay.valueOf(),
        duration: endPlay.valueOf() - startPlay.valueOf(),
        startFunction: 'play:start',
        endFunction: 'play:end',
        updateFunction: 'play:update',
        cancelFunction: 'play:cancel',
        animation: {
          name: 'bounce',
        },
        importance: 2,
      })
    }

    this.lastRender = timestamp
  }

  getHappinessPerSecond = (action: ActionType): number => {
    const {
      vitals: { happiness },
    } = getBubble()

    const timestamp = Date.now()

    const happinessEnd = action.memory?.happinessEnd as number

    // Get time left
    const actionEnd = action.start + action.duration
    const timeLeft = (actionEnd - timestamp) / HAPPINESS_INCREASE_DELAY

    // Get happiness missing
    const happinessMissing = happinessEnd - happiness

    // Get happiness per second
    const happinessPerSecond = happinessMissing / timeLeft

    return happinessPerSecond
  }

  handleStartPlay = (action: ActionType): void => {
    const {
      vitals: { happiness },
    } = getBubble()

    const recoverValue =
      (action.memory?.recoverValue as number | undefined) ||
      BubbleConfig.actions.play.recover +
        random({
          min: BubbleConfig.actions.play.recoverMargin * -1,
          max: BubbleConfig.actions.play.recoverMargin,
          round: false,
        })

    const happinessEnd = happiness + BubbleConfig.vitals.happiness.max * recoverValue

    if (action.id) {
      updateMemoryValue({
        actionId: action.id,
        memoryId: 'happinessEnd',
        value:
          happinessEnd > BubbleConfig.vitals.happiness.max
            ? BubbleConfig.vitals.happiness.max
            : happinessEnd,
      })
    }
  }

  handleUpdatePlay = (action: ActionType): void => {
    const timestamp = Date.now()
    if (timestamp - this.lastRenderUpdatePlay < 1000) {
      return
    }

    addHappiness({
      value: this.getHappinessPerSecond(action),
    })

    this.lastRenderUpdatePlay = timestamp
  }

  handleEndPlay = (): void => {
    // NOTHING
  }

  handleCancelPlay = (): void => {
    // NOTHING
  }
}
