import { dateToMs } from '@bubble/common'
import { BubbleConfig } from '@bubble/configs'
import { removeHealth } from '@bubble/store'

import { Vital } from './vital.js'

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
