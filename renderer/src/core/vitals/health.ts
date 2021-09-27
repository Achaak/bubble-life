import { Vital } from './vital'
import { BubbleConfig } from '@configs/bubble'
import { removeHealthAction } from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { dateToMs } from '@src/utils'

export class Vital_Health extends Vital {
  constructor() {
    super()

    this.name = 'health'
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    store.dispatch(removeHealthAction(BubbleConfig.vitals.health.decrease))

    this.lastRender = timestamp
  }
}
