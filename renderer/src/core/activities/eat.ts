import { Action } from '../action'
import { BubbleConfig } from '@configs/bubble'
import { addActivityInList, hasActivityInCurrent } from '@src/redux/reducers/activities/utils'
import {
  addWeightAction,
  resetOnomatopoeiaAction,
  resetSaturationAction,
  setOnomatopoeiaAction,
} from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { dateToMs, random } from '@src/utils'
import dayjs from 'dayjs'

export class Activity_eat extends Action {
  constructor() {
    super()

    this.name = 'eat'
    this.actions = [
      {
        name: 'eat:start',
        function: this.handleStartEat,
      },
      {
        name: 'eat:end',
        function: this.handleEndEat,
      },
    ]
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    const hasActivity = hasActivityInCurrent({ name: 'eat' })

    if (store.getState().bubble.vitals.saturation <= 0 && !hasActivity) {
      const startEat = dayjs()
      const endEat = dayjs(startEat).add(
        BubbleConfig.activities.eat.duration +
          random({
            min: BubbleConfig.activities.eat.margin * -1,
            max: BubbleConfig.activities.eat.margin,
            round: true,
          }),
        'minute'
      )

      addActivityInList({
        activity: {
          name: 'eat',
          start: startEat.valueOf(),
          duration: endEat.valueOf() - startEat.valueOf(),
          startFunction: 'eat:start',
          EndFunction: 'eat:end',
          importance: 2,
        },
      })
    }

    this.lastRender = timestamp
  }

  handleStartEat = (): void => {
    store.dispatch(setOnomatopoeiaAction({ value: 'eat' }))
  }

  handleEndEat = (): void => {
    store.dispatch(resetSaturationAction())

    store.dispatch(
      addWeightAction({
        value: random({
          min: BubbleConfig.activities.eat.minWeightToAdd,
          max: BubbleConfig.activities.eat.maxWeightToadd,
        }),
      })
    )
    store.dispatch(resetOnomatopoeiaAction())
  }
}
