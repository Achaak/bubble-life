import { Action } from '../action'
import { BubbleConfig } from '@configs/bubble'
import {
  addActionInAwaitList,
  addActionInCancelList,
  hasActionInCurrent,
} from '@src/redux/reducers/actions/utils'
import {
  addSaturationAction,
  addWeightAction,
  resetSaturationAction,
} from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { Action as ActionType } from '@src/types/action'
import { dateToMs, random } from '@src/utils'
import dayjs from 'dayjs'

export class Action_eat extends Action {
  constructor() {
    super()

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

    const hasAction = hasActionInCurrent({ name: 'eat' })

    if (store.getState().bubble.vitals.saturation <= 0 && !hasAction) {
      const startEat = dayjs()
      const endEat = dayjs(startEat).add(
        BubbleConfig.actions.eat.duration +
          random({
            min: BubbleConfig.actions.eat.margin * -1,
            max: BubbleConfig.actions.eat.margin,
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

  handleStartEat = (): void => {
    // NOTHING
  }

  handleUpdateEat = (action: ActionType): void => {
    if (store.getState().bubble.vitals.saturation >= BubbleConfig.vitals.saturation.max) {
      addActionInCancelList({ id: action.id })
    } else {
      store.dispatch(addSaturationAction(1))
    }
  }

  handleEndEat = (): void => {
    store.dispatch(resetSaturationAction())

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
