import type { BubbleConfigType } from '@bubble/types';

export const BubbleConfig: BubbleConfigType = {
  defaultName: 'Bubble',
  vitals: {
    weight: {
      default: 20,
      min: 5,
      max: 50,
    },
    saturation: {
      default: 12000,
      max: 12000,
      decrease: 1, // Every 1s
    },
    happiness: {
      default: 12000,
      max: 12000,
      decrease: 1, // Every 1s
    },
    tiredness: {
      default: 86400,
      max: 86400,
      decrease: 1, // Every 1s
    },
    health: {
      default: 200000,
      max: 200000,
      decrease: 1, // Every 1s
    },
  },
  actions: {
    sleep: {
      startAt: '00:00', // HH:mm
      duration: 540, // Minutes
      durationMargin: 30, // Minutes
      recover: 0.5, // Between 0 and 1
      recoverMargin: 0.1, // Between 0 and 1
    },
    nap: {
      duration: 20, // Minutes
      durationMargin: 5, // Minutes
      recover: 0.2, // Between 0 and 1
      recoverMargin: 0.05, // Between 0 and 1
    },
    eat: {
      duration: 20, // Minutes
      durationMargin: 5, // Minutes
      minWeightToAdd: 1, // kilogram
      maxWeightToAdd: 2, // kilogram
      recover: 0.5, // Between 0 and 1
      recoverMargin: 0.1, // Between 0 and 1
    },
    care: {
      duration: 20, // Minutes
      durationMargin: 5, // Minutes
      recover: 0.5, // Between 0 and 1
      recoverMargin: 0.1, // Between 0 and 1
    },
    shopping: {
      duration: 20, // minutes
      durationMargin: 5, // minutes
    },
    play: {
      duration: 1, // minutes
      durationMargin: 0, // minutes
      recover: 0.5, // Between 0 and 1
      recoverMargin: 0.1, // Between 0 and 1
    },
  },
  defaultElements: {
    eyes: 'enjoy',
    clothe: null,
    environment: 'home',
    hat: null,
    body: 'default',
    onomatopoeia: null,
  },
  defaultInventory: [
    {
      type: 'food',
      stock: 1,
    },
    {
      type: 'medication',
      stock: 1,
    },
  ],
};
