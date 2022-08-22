import { dateToMs } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import { removeTiredness } from '@bubble/store';

import { Vital } from './vital.js';

const UPDATE_INTERVAL = dateToMs({ seconds: 1 });

export class VitalTiredness extends Vital {
  constructor() {
    super();

    this.name = 'tiredness';
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < UPDATE_INTERVAL) {
      return;
    }

    removeTiredness({
      value: BubbleConfig.vitals.tiredness.decrease,
    });

    this.lastRender = timestamp;
  };
}
