import { Vital } from './vital'
import { BubbleConfig } from '@configs/bubble'
import { removeTirednessAction } from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { dateToMs, random } from '@src/utils'

export class Vital_Tiredness extends Vital {
  constructor() {
    super()

    this.name = 'tiredness'
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    store.dispatch(
      removeTirednessAction(
        random({
          min: BubbleConfig.vitals.tiredness.minDecrease,
          max: BubbleConfig.vitals.tiredness.maxDecrease,
        })
      )
    )

    this.lastRender = timestamp
  }
}
