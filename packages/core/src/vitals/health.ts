import { dateToMs } from '@bubble/common';
import { BubbleConfig } from '@bubble/configs';
import { removeHealth } from '@bubble/store';

import { Vital } from './vital.js';

const UPDATE_INTERVAL = dateToMs({ seconds: 1 });

export class VitalHealth extends Vital {
  constructor() {
    super();

    this.name = 'health';
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < UPDATE_INTERVAL) {
      return;
    }

    removeHealth({
      value: BubbleConfig.vitals.health.decrease,
    });

    this.lastRender = timestamp;
  };
}
