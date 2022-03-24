import { dateToMs } from '@bubble/common'
import { BubbleConfig } from '@bubble/configs/bubble'
import { removeTiredness } from '@bubble/store'

import { Vital } from './vital'

export class VitalTiredness extends Vital {
  constructor() {
    super()

    this.name = 'tiredness'
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    removeTiredness({
      value: BubbleConfig.vitals.tiredness.decrease,
    })

    this.lastRender = timestamp
  }
}
