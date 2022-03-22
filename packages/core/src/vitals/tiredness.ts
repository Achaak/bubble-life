import { dateToMs } from '@bubble/common/src/date'
import { BubbleConfig } from '@bubble/configs/bubble'
import { bubbleActions } from '@bubble/store/src/reducers/bubble'
import { store } from '@bubble/store/src/store'

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

    store.dispatch(bubbleActions.removeTiredness(BubbleConfig.vitals.tiredness.decrease))

    this.lastRender = timestamp
  }
}
