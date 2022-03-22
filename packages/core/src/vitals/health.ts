import { dateToMs } from '@bubble/common/src/date'
import { BubbleConfig } from '@bubble/configs/bubble'
import { bubbleActions } from '@bubble/store/src/reducers/bubble'
import { store } from '@bubble/store/src/store'

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
