import { dateToMs } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import { removeSaturation } from '@bubble/store';

import { Vital } from './vital.js';

const UPDATE_INTERVAL = dateToMs({ seconds: 1 });

export class VitalSaturation extends Vital {
  constructor() {
    super();

    this.name = 'saturation';
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < UPDATE_INTERVAL) {
      return;
    }

    removeSaturation({
      value: BubbleConfig.vitals.saturation.decrease,
    });

    this.lastRender = timestamp;
  };
}
