import { dateToMs } from '@bubble/common/src/date'
import { BubbleConfig } from '@bubble/configs/bubble'
import { removeHappiness } from '@bubble/store'

import { Vital } from './vital'

export class VitalHappiness extends Vital {
  constructor() {
    super()

    this.name = 'saturation'
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    removeHappiness(BubbleConfig.vitals.saturation.decrease)

    this.lastRender = timestamp
  }
}
