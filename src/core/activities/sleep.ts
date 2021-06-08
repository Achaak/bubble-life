import { SleepConfig } from '@/config/states'
import { overmind } from '@/store'
import { dateToMs, random } from '@/utils'
import dayjs from 'dayjs'
import { Actions } from '../actions'

export class Activity_sleep extends Actions {
  constructor() {
    super()
  }

  update = (timestamp: number): void => {
    const { actions } = overmind
    const { setActivity, hasActivity } = actions.activities

    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    if (hasActivity({ name: 'sleep' }).length === 0) {
      const hourStart = parseInt(SleepConfig.start.split(':')[0]) || 0
      const minuteStart = parseInt(SleepConfig.start.split(':')[1]) || 0

      const actualDate = dayjs()

      let startSleep = dayjs(
        new Date(
          actualDate.year(),
          actualDate.month(),
          actualDate.date(),
          hourStart,
          random(minuteStart + SleepConfig.margin, minuteStart - SleepConfig.margin),
          0
        )
      )
      if (actualDate.valueOf() > startSleep.valueOf()) {
        startSleep = startSleep.add(1, 'day')
      }

      const endSleep = dayjs(startSleep).add(
        random(SleepConfig.margin, SleepConfig.margin),
        'minute'
      )

      console.log(startSleep.format())
      setActivity({
        activity: {
          name: 'sleep',
          start: startSleep.valueOf(),
          duration: endSleep.valueOf() - startSleep.valueOf(),
          function: () => console.log('dodo'),
          importance: 2,
        },
      })
    }

    this.lastRender = timestamp
  }
}
