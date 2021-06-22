import { BubbleConfig } from '@configs/bubble'
import { addActivityInList } from '@src/redux/utils/activities'
import {
  resetEyes,
  resetOnomatopoeia,
  setEyes,
  setOnomatopoeia,
} from '@src/redux/reducers/bubbleSlice'
import { store } from '@src/redux/store'
import { hasActivityInList } from '@src/redux/utils/activities'
import { dateToMs, random } from '@src/utils'
import dayjs from 'dayjs'
import { Actions } from '../actions'

export class Activity_sleep extends Actions {
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
      const hourStart = parseInt(BubbleConfig.sleep.start.split(':')[0]) || 0
      const minuteStart = parseInt(BubbleConfig.sleep.start.split(':')[1]) || 0

      const actualDate = dayjs()

      let startSleep = dayjs(
        new Date(
          actualDate.year(),
          actualDate.month(),
          actualDate.date(),
          hourStart,
          random({
            min: minuteStart + BubbleConfig.sleep.margin,
            max: minuteStart - BubbleConfig.sleep.margin,
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
        BubbleConfig.sleep.duration +
          random({
            min: BubbleConfig.sleep.margin * -1,
            max: BubbleConfig.sleep.margin,
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
    store.dispatch(setEyes({ value: 'sleep' }))
    store.dispatch(setOnomatopoeia({ value: 'sleep' }))
  }
  handleEndSleep = (): void => {
    store.dispatch(resetEyes())
    store.dispatch(resetOnomatopoeia())
  }
}
