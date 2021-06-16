import { BubbleConfig } from '@configs/bubble'
import { addWeight } from '@src/redux/reducers/bubbleSlice'
import { store } from '@src/redux/store'
import { addActivityInList, hasActivityInCurrent } from '@src/redux/utils/activities'
import { dateToMs, random } from '@src/utils'
import dayjs from 'dayjs'
import { Actions } from '../actions'

const DEFAULT_SATURATION = BubbleConfig.eat.saturation.default

export class Activity_eat extends Actions {
  saturation: number

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

    this.saturation = DEFAULT_SATURATION
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    const hasActivity = hasActivityInCurrent({ name: 'eat' })

    if (!hasActivity) {
      this.saturation -= random({
        min: BubbleConfig.eat.saturation.minDecrease,
        max: BubbleConfig.eat.saturation.maxDecrease,
      })
    }

    if (this.saturation <= 0 && !hasActivity) {
      const startEat = dayjs()
      const endEat = dayjs(startEat).add(
        BubbleConfig.eat.duration +
          random({ min: BubbleConfig.eat.margin * -1, max: BubbleConfig.eat.margin, round: true }),
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
    console.log('Start eat')
  }

  handleEndEat = (): void => {
    this.saturation = DEFAULT_SATURATION
    store.dispatch(
      addWeight({
        value: random({
          min: BubbleConfig.eat.minWeightToAdd,
          max: BubbleConfig.eat.maxWeightToadd,
        }),
      })
    )
  }
}
