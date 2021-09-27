import { Action } from '../action'
import { BubbleConfig } from '@configs/bubble'
import { addActionInAwaitList, hasAction } from '@src/redux/reducers/actions/utils'
import { addSaturationAction, addWeightAction } from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { Action as ActionType } from '@src/types/action'
import { dateToMs, random } from '@src/utils'
import dayjs from 'dayjs'

const SATURATION_INCREASE_DELAY = dateToMs({ seconds: 1 })

export class Action_eat extends Action {
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
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

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

      addActionInAwaitList({
        name: 'eat',
        start: startEat.valueOf(),
        duration: endEat.valueOf() - startEat.valueOf(),
        startFunction: 'eat:start',
        updateFunction: 'eat:update',
        endFunction: 'eat:end',
        cancelFunction: 'eat:cancel',
        importance: 2,
        elements: {
          onomatopoeia: {
            name: 'eat',
          },
        },
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
    if (timestamp - this.lastRenderUpdateEat < SATURATION_INCREASE_DELAY) return

    store.dispatch(addSaturationAction(this.getSaturationPerSecond(action)))

    this.lastRenderUpdateEat = timestamp
  }

  handleEndEat = (): void => {
    store.dispatch(
      addWeightAction(
        random({
          min: BubbleConfig.actions.eat.minWeightToAdd,
          max: BubbleConfig.actions.eat.maxWeightToadd,
        })
      )
    )
  }

  handleCancelEat = (): void => {
    // NOTHING
  }
}
