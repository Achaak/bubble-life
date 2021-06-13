import { Bubble } from '@configs/bubble'
import { Bodies, Clothes, Environments, Eyes, Hats } from '@src/types/bubble'

export type State = {
  name: string
  weight: number
  eyes: Eyes
  environment: Environments
  clothe: Clothes
  hat: Hats
  body: Bodies
}

export const state: State = {
  name: 'Bubble',
  weight: Bubble.weight.start,
  eyes: Bubble.defaultElements.eyes,
  clothe: Bubble.defaultElements.clothe,
  environment: Bubble.defaultElements.environment,
  body: Bubble.defaultElements.body,
  hat: Bubble.defaultElements.hat,
}
