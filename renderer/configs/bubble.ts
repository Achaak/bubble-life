import { BubbleConfigType } from '@src/types/bubble'

export const BubbleConfig: BubbleConfigType = {
  weight: {
    start: 20,
    min: 5,
    max: 50,
  },
  sleep: {
    start: '00:00', // HH:mm
    duration: 540, // minutes
    margin: 30, // minutes
  },
  eat: {
    duration: 20, // minutes
    margin: 5, // minutes
    minWeightToAdd: 1, // kilogram
    maxWeightToadd: 2, // kilogram
    saturation: {
      default: 12000,
      minDecrease: 1, // Every 1s
      maxDecrease: 2, // Every 1s
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
}
