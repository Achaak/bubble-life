import { Action } from '../action'
import { BubbleConfig } from '@configs/bubble'
import { addActivityInList, hasActivityInList } from '@src/redux/reducers/activities/utils'
import {
  resetEyesAction,
  resetOnomatopoeiaAction,
  setEyesAction,
  setOnomatopoeiaAction,
} from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { dateToMs, random } from '@src/utils'
import dayjs from 'dayjs'

export class Activity_sleep extends Action {
  constructor() {
    super()

    this.name = 'sleep'
    this.actions = [
      {
        name: 'sleep:start',
        function: this.handleStartSleep,
      },
      {
        name: 'sleep:end',
        function: this.handleEndSleep,
      },
    ]
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    if (!hasActivityInList({ name: 'sleep' })) {
      const hourStart = parseInt(BubbleConfig.activities.sleep.start.split(':')[0]) || 0
      const minuteStart = parseInt(BubbleConfig.activities.sleep.start.split(':')[1]) || 0

      const actualDate = dayjs()

      let startSleep = dayjs(
        new Date(
          actualDate.year(),
          actualDate.month(),
          actualDate.date(),
          hourStart,
          random({
            min: minuteStart + BubbleConfig.activities.sleep.margin,
            max: minuteStart - BubbleConfig.activities.sleep.margin,
            round: true,
          }),
          0
        )
      )
      // TODO
      if (actualDate.valueOf() > startSleep.valueOf()) {
        startSleep = startSleep.add(1, 'day')
      }

      const endSleep = dayjs(startSleep).add(
        BubbleConfig.activities.sleep.duration +
          random({
            min: BubbleConfig.activities.sleep.margin * -1,
            max: BubbleConfig.activities.sleep.margin,
            round: true,
          }),
        'minute'
      )

      addActivityInList({
        activity: {
          name: 'sleep',
          start: startSleep.valueOf(),
          duration: endSleep.valueOf() - startSleep.valueOf(),
          startFunction: 'sleep:start',
          EndFunction: 'sleep:end',
          importance: 2,
        },
      })
    }

    this.lastRender = timestamp
  }

  handleStartSleep = (): void => {
    store.dispatch(setEyesAction({ value: 'sleep' }))
    store.dispatch(setOnomatopoeiaAction({ value: 'sleep' }))
  }
  handleEndSleep = (): void => {
    store.dispatch(resetEyesAction())
    store.dispatch(resetOnomatopoeiaAction())
  }
}
