import { Vital } from './vital'
import { BubbleConfig } from '@configs/bubble'
import { bubbleActions } from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { dateToMs } from '@src/utils'

export class Vital_Tiredness extends Vital {
  constructor() {
    super()

    this.name = 'tiredness'
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    store.dispatch(bubbleActions.removeTiredness(BubbleConfig.vitals.tiredness.decrease))

    this.lastRender = timestamp
  }
}
