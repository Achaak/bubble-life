import { Vital } from './vital'
import { BubbleConfig } from '@configs/bubble'
import { removeHappinessAction } from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { dateToMs, random } from '@src/utils'

export class Vital_Happiness extends Vital {
  constructor() {
    super()

    this.name = 'saturation'
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    store.dispatch(
      removeHappinessAction(
        random({
          min: BubbleConfig.vitals.saturation.minDecrease,
          max: BubbleConfig.vitals.saturation.maxDecrease,
        })
      )
    )

    this.lastRender = timestamp
  }
}
