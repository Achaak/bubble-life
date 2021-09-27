import { Vital } from './vital'
import { BubbleConfig } from '@configs/bubble'
import { removeSaturationAction } from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { dateToMs, random } from '@src/utils'

export class Vital_Saturation extends Vital {
  constructor() {
    super()

    this.name = 'saturation'
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    store.dispatch(
      removeSaturationAction(
        random({
          min: BubbleConfig.vitals.saturation.minDecrease,
          max: BubbleConfig.vitals.saturation.maxDecrease,
        })
      )
    )

    this.lastRender = timestamp
  }
}
