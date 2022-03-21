import { BubbleConfigType } from '@src/types/bubble'

export const BubbleConfig: BubbleConfigType = {
  vitals: {
    weight: {
      start: 20,
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
      default: 12000,
      max: 12000,
      decrease: 1, // Every 1s
    },
  },
  actions: {
    sleep: {
      startAt: '00:00', // HH:mm
      duration: 540, // minutes
      durationMargin: 30, // minutes
    },
    nap: {
      duration: 20, // minutes
      durationMargin: 5, // minutes
      recover: 0.2, // Between 0 and 1
      recoverMargin: 0.05, // Between 0 and 1
    },
    eat: {
      duration: 20, // minutes
      durationMargin: 5, // minutes
      minWeightToAdd: 1, // kilogram
      maxWeightToadd: 2, // kilogram
    },
    shopping: {
      duration: 20, // minutes
      durationMargin: 5, // minutes
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
  ],
}
