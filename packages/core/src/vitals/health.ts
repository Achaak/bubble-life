import { dateToMs } from '@bubble/common/src/date'
import { BubbleConfig } from '@bubble/configs/bubble'
import { removeHealth } from '@bubble/store'

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

    removeHealth({
      value: BubbleConfig.vitals.health.decrease,
    })

    this.lastRender = timestamp
  }
}
