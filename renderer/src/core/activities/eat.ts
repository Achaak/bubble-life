import { Bubble } from '@configs/bubble'
import { overmind } from '@src/store'
import { dateToMs, random } from '@src/utils'
import dayjs from 'dayjs'
import { Actions } from '../actions'

const DEFAULT_SATURATION = 10

export class Activity_eat extends Actions {
  saturation: number

  constructor() {
    super()
    this.saturation = DEFAULT_SATURATION
  }

  update = (timestamp: number): void => {
    const { actions } = overmind
    const { setActivity, hasActivityInCurrent } = actions.activities
    const { addWeight } = actions.bubble

    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    const hasActivity = hasActivityInCurrent({ name: 'eat' })

    if (!hasActivity) {
      this.saturation -= random({ min: 1, max: 2 })
    }

    if (this.saturation <= 0 && !hasActivity) {
      const startEat = dayjs()
      const endEat = dayjs(startEat).add(
        Bubble.eat.duration +
          random({ min: Bubble.eat.margin * -1, max: Bubble.eat.margin, round: true }),
        'minute'
      )

      setActivity({
        activity: {
          name: 'eat',
          start: startEat.valueOf(),
          duration: endEat.valueOf() - startEat.valueOf(),
          onStart: () => console.log('eat'),
          onEnd: () => {
            this.saturation = DEFAULT_SATURATION
            addWeight({
              value: random({ min: Bubble.eat.minWeightToAdd, max: Bubble.eat.maxWeightToadd }),
            })
          },
          importance: 2,
        },
      })
    }

    this.lastRender = timestamp
  }
}
