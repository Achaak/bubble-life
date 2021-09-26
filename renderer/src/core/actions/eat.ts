import { Action } from '../action'
import { BubbleConfig } from '@configs/bubble'
import { addActionInList, hasActionInCurrent } from '@src/redux/reducers/actions/utils'
import {
  addSaturationAction,
  addWeightAction,
  resetOnomatopoeiaAction,
  resetSaturationAction,
  setOnomatopoeiaAction,
} from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
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

      addActionInList({
        action: {
          name: 'eat',
          start: startEat.valueOf(),
          duration: endEat.valueOf() - startEat.valueOf(),
          startFunction: 'eat:start',
          updateFunction: 'eat:update',
          endFunction: 'eat:end',
          importance: 2,
        },
      })
    }

    this.lastRender = timestamp
  }

  handleStartEat = (): void => {
    store.dispatch(setOnomatopoeiaAction({ value: 'eat' }))
  }

  handleUpdateEat = (): void => {
    console.log('eat')
    store.dispatch(addSaturationAction({ value: 1 }))
  }

  handleEndEat = (): void => {
    store.dispatch(resetSaturationAction())

    store.dispatch(
      addWeightAction({
        value: random({
          min: BubbleConfig.actions.eat.minWeightToAdd,
          max: BubbleConfig.actions.eat.maxWeightToadd,
        }),
      })
    )
    store.dispatch(resetOnomatopoeiaAction())
  }
}
