import { socket } from '@bubble/common';
import {
  addHappiness,
  addHealth,
  addSaturation,
  addTiredness,
  addWeight,
  removeHappiness,
  removeHealth,
  removeSaturation,
  removeTiredness,
  removeWeight,
  resetHappiness,
  resetHealth,
  resetSaturation,
  resetTiredness,
  resetWeight,
  setHappiness,
  setHealth,
  setSaturation,
  setTiredness,
  setWeight,
} from '@bubble/store';
import type { SocketEvents } from '@bubble/types';
import { VitalsList } from './vitals/index.js';
import type { Vital } from './vitals/vital.js';

export class Vitals {
  vitals: {
    name: string;
    class: Vital;
  }[];

  socket?: SocketEvents;

  constructor() {
    this.vitals = [];

    this.initVitalsList();

    this.socket = socket({
      localhost: true,
    });

    this.socket.on('setHappiness', setHappiness);
    this.socket.on('resetHappiness', resetHappiness);
    this.socket.on('addHappiness', addHappiness);
    this.socket.on('removeHappiness', removeHappiness);
    this.socket.on('setHealth', setHealth);
    this.socket.on('resetHealth', resetHealth);
    this.socket.on('addHealth', addHealth);
    this.socket.on('removeHealth', removeHealth);
    this.socket.on('setSaturation', setSaturation);
    this.socket.on('resetSaturation', resetSaturation);
    this.socket.on('addSaturation', addSaturation);
    this.socket.on('removeSaturation', removeSaturation);
    this.socket.on('setTiredness', setTiredness);
    this.socket.on('resetTiredness', resetTiredness);
    this.socket.on('addTiredness', addTiredness);
    this.socket.on('removeTiredness', removeTiredness);
    this.socket.on('setWeight', setWeight);
    this.socket.on('resetWeight', resetWeight);
    this.socket.on('addWeight', addWeight);
    this.socket.on('removeWeight', removeWeight);
  }

  initVitalsList = (): void => {
    for (const V of VitalsList) {
      const v = new V();

      this.vitals.push({
        name: v.name,
        class: v,
      });
    }
  };

  update = (timestamp: number): void => {
    for (const vital of this.vitals) {
      vital.class.update(timestamp);
    }
  };
}
