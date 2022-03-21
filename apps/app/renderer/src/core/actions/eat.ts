import { BubbleConfig } from '@bubble/configs/bubble'
import type { Action as ActionType } from '@bubble/types/src/action'
import { addActionInAwaitList, hasAction } from '@src/redux/reducers/actions/actions'
import { bubbleActions } from '@src/redux/reducers/bubble'
import { removeInventoryItem } from '@src/redux/reducers/bubble/actions'
import { store } from '@src/redux/store'
import { dateToMs } from '@src/utils/date'
import { random } from '@src/utils/random'
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
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    if (store.getState().bubble.vitals.saturation <= 0 && !hasAction({ name: 'eat' })) {
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

    this.lastRender = timestamp
  }

  getSaturationPerSecond = (action: ActionType): number => {
    const timestamp = Date.now()

    const saturationMissing =
      BubbleConfig.vitals.saturation.max - store.getState().bubble.vitals.saturation

    return (
      saturationMissing / ((action.start + action.duration - timestamp) / SATURATION_INCREASE_DELAY)
    )
  }

  handleStartEat = (): void => {
    // NOTHING
  }

  handleUpdateEat = (action: ActionType): void => {
    const timestamp = Date.now()
    if (timestamp - this.lastRenderUpdateEat < SATURATION_INCREASE_DELAY) {
      return
    }

    store.dispatch(bubbleActions.addSaturation(this.getSaturationPerSecond(action)))

    this.lastRenderUpdateEat = timestamp
  }

  handleEndEat = (): void => {
    store.dispatch(
      bubbleActions.addWeight(
        random({
          min: BubbleConfig.actions.eat.minWeightToAdd,
          max: BubbleConfig.actions.eat.maxWeightToadd,
        })
      )
    )

    removeInventoryItem({ type: 'food', number: 1 })
  }

  handleCancelEat = (): void => {
    removeInventoryItem({ type: 'food', number: 1 })
  }
}
