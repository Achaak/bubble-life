import { SleepConfig } from '@/config/states'
import { overmind } from '@/store'
import { dateToMs } from '@/utils/date'
import dayjs from 'dayjs'
import { Actions } from '../actions'

const { actions } = overmind
const { setActivity, hasActivity } = actions.activities

export class Activity_sleep extends Actions {
  constructor() {
    super()
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ minutes: 1 })) return

    if (hasActivity({ name: 'sleep' }).length === 0) {
      const hourStart = parseInt(SleepConfig.start.split(':')[0]) || 0
      const minuteStart = parseInt(SleepConfig.start.split(':')[1]) || 0

      const actualDate = dayjs()
      const startSleep = dayjs(
        new Date(
          actualDate.year(),
          actualDate.month(),
          actualDate.date(),
          hourStart,
          minuteStart,
          0
        )
      )
      const endSleep = dayjs(startSleep).add(SleepConfig.duration, 'minute')

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
