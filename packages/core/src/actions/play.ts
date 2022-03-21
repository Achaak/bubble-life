import { dateToMs } from '@bubble/common/src/date'
import { random } from '@bubble/common/src/random'
import { BubbleConfig } from '@bubble/configs/bubble'
import { addActionInAwaitList, hasAction } from '@bubble/store/src/reducers/actions/actions'
import { bubbleActions } from '@bubble/store/src/reducers/bubble'
import { store } from '@bubble/store/src/store'
import type { Action as ActionType } from '@bubble/types/src/action'
import dayjs from 'dayjs'
import { Action } from '../action'

const HEALTH_INCREASE_DELAY = dateToMs({ seconds: 1 })

export const addPlayActionInAwaitList = ({
  start,
  duration,
  importance,
}: {
  start: number
  duration: number
  importance: 1 | 2 | 3
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
  })
}

export class ActionPlay extends Action {
  lastRenderUpdatePlay: number

  recoverValue: number

  constructor() {
    super()

    this.lastRenderUpdatePlay = 0
    this.recoverValue = 0

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

  initPlayRecoverValue = (): void => {
    this.recoverValue =
      BubbleConfig.actions.play.recover +
      random({
        min: BubbleConfig.actions.play.recoverMargin * -1,
        max: BubbleConfig.actions.play.recoverMargin,
        round: true,
      })
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    if (store.getState().bubble.vitals.health <= 0 && !hasAction({ name: 'play' })) {
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

  getHealthPerSecond = (action: ActionType): number => {
    const timestamp = Date.now()

    // Get health missing
    const healthMissing =
      BubbleConfig.vitals.health.max * this.recoverValue - store.getState().bubble.vitals.health

    return healthMissing / ((action.start + action.duration - timestamp) / HEALTH_INCREASE_DELAY)
  }

  handleStartPlay = (): void => {
    // Init recover value
    this.initPlayRecoverValue()
  }

  handleUpdatePlay = (action: ActionType): void => {
    const timestamp = Date.now()
    if (timestamp - this.lastRenderUpdatePlay < 1000) {
      return
    }

    store.dispatch(bubbleActions.addHealth(this.getHealthPerSecond(action)))

    this.lastRenderUpdatePlay = timestamp
  }

  handleEndPlay = (): void => {
    // Reset recover value
    this.recoverValue = 0
  }

  handleCancelPlay = (): void => {
    // Reset recover value
    this.recoverValue = 0
  }
}
