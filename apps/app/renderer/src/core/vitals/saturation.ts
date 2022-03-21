import { BubbleConfig } from '@configs/bubble'
import { bubbleActions } from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { dateToMs } from '@src/utils'

import { Vital } from './vital'

export class Vital_Saturation extends Vital {
  constructor() {
    super()

    this.name = 'saturation'
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    store.dispatch(bubbleActions.removeSaturation(BubbleConfig.vitals.saturation.decrease))

    this.lastRender = timestamp
  }
}
