import { dateToMs } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import { removeHappiness } from '@bubble/store';

import { Vital } from './vital.js';

export class VitalHappiness extends Vital {
  constructor() {
    super();

    this.name = 'saturation';
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return;
    }

    removeHappiness({
      value: BubbleConfig.vitals.saturation.decrease,
    });

    this.lastRender = timestamp;
  };
}
