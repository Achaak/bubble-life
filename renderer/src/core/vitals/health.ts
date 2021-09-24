import { Vital } from './vital'
import { BubbleConfig } from '@configs/bubble'
import { removeHealthAction } from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { dateToMs, random } from '@src/utils'

export class Vital_Health extends Vital {
  constructor() {
    super()

    this.name = 'health'
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    store.dispatch(
      removeHealthAction({
        value: random({
          min: BubbleConfig.vitals.health.minDecrease,
          max: BubbleConfig.vitals.health.maxDecrease,
        }),
      })
    )

    this.lastRender = timestamp
  }
}
