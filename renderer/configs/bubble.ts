import { BubbleConfig } from '@src/types/bubble'

export const Bubble: BubbleConfig = {
  weight: {
    start: 20,
    min: 5,
    max: 50,
  },
  sleep: {
    start: '23:00', // HH:mm
    duration: 540, // minutes
    margin: 30, // minutes
  },
  eat: {
    duration: 1, // minutes
    margin: 0, // minutes
    minWeightToAdd: 5, // kilogram
    maxWeightToadd: 10, // kilogram
  },
  defaultElements: {
    eyes: 'enjoy',
    clothe: null,
    environment: 'home',
    hat: null,
    body: 'default',
  },
}
