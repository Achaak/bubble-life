import { dateToMs } from '@bubble/common'
import { BubbleConfig } from '@bubble/configs'
import { removeSaturation } from '@bubble/store'

import { Vital } from './vital'

export class VitalSaturation extends Vital {
  constructor() {
    super()

    this.name = 'saturation'
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    removeSaturation({
      value: BubbleConfig.vitals.saturation.decrease,
    })

    this.lastRender = timestamp
  }
}
