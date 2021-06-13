import { Bubble } from '@configs/bubble'
import { overmind } from '@src/store'
import { dateToMs, random } from '@src/utils'
import dayjs from 'dayjs'
import { Actions } from '../actions'

export class Activity_sleep extends Actions {
  constructor() {
    super()
  }

  update = (timestamp: number): void => {
    const { actions } = overmind
    const { setActivity, hasActivityInList } = actions.activities

    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    if (hasActivityInList({ name: 'sleep' })) {
      const hourStart = parseInt(Bubble.sleep.start.split(':')[0]) || 0
      const minuteStart = parseInt(Bubble.sleep.start.split(':')[1]) || 0

      const actualDate = dayjs()

      let startSleep = dayjs(
        new Date(
          actualDate.year(),
          actualDate.month(),
          actualDate.date(),
          hourStart,
          random({
            min: minuteStart + Bubble.sleep.margin,
            max: minuteStart - Bubble.sleep.margin,
            round: true,
          }),
          0
        )
      )
      if (actualDate.valueOf() > startSleep.valueOf()) {
        startSleep = startSleep.add(1, 'day')
      }

      const endSleep = dayjs(startSleep).add(
        Bubble.sleep.duration +
          random({ min: Bubble.sleep.margin * -1, max: Bubble.sleep.margin, round: true }),
        'minute'
      )

      setActivity({
        activity: {
          name: 'sleep',
          start: startSleep.valueOf(),
          duration: endSleep.valueOf() - startSleep.valueOf(),
          onStart: () => console.log('dodo'),
          importance: 2,
        },
      })
    }

    this.lastRender = timestamp
  }
}
