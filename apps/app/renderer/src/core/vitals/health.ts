import { BubbleConfig } from '@bubble/configs/bubble'
import { bubbleActions } from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { dateToMs } from '@src/utils/date'
import { Vital } from './vital'

export class VitalHealth extends Vital {
  constructor() {
    super()

    this.name = 'health'
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    store.dispatch(bubbleActions.removeHealth(BubbleConfig.vitals.health.decrease))

    this.lastRender = timestamp
  }
}
