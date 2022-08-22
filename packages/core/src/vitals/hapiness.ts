import { dateToMs } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import { removeHappiness } from '@bubble/store';

import { Vital } from './vital.js';

const UPDATE_INTERVAL = dateToMs({ seconds: 1 });

export class VitalHappiness extends Vital {
  constructor() {
    super();

    this.name = 'saturation';
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < UPDATE_INTERVAL) {
      return;
    }

    removeHappiness({
      value: BubbleConfig.vitals.saturation.decrease,
    });

    this.lastRender = timestamp;
  };
}
