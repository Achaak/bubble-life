import { BubbleConfig } from '@configs/bubble'
import { Animation } from '@src/types/animation'
import { Bodies, Clothes, Environments, Eyes, Hats, Onomatopoeia } from '@src/types/bubble'

export interface BubbleStateVitals {
  weight: number
  saturation: number
  happiness: number
  tiredness: number
  health: number
}

export interface BubbleStateElements {
  eyes: Eyes
  environment: Environments
  clothe: Clothes
  hat: Hats
  body: Bodies
  onomatopoeia: Onomatopoeia
}

export interface BubbleState {
  name: string
  animationList: Animation[]
  vitals: BubbleStateVitals
  elements: BubbleStateElements
}

export const initialBubbleState: BubbleState = {
  name: 'Bubble',
  animationList: [],
  vitals: {
    weight: BubbleConfig.vitals.weight.start,
    saturation: BubbleConfig.vitals.saturation.default,
    happiness: BubbleConfig.vitals.happiness.default,
    tiredness: BubbleConfig.vitals.tiredness.default,
    health: BubbleConfig.vitals.health.default,
  },
  elements: {
    eyes: BubbleConfig.defaultElements.eyes,
    clothe: BubbleConfig.defaultElements.clothe,
    environment: BubbleConfig.defaultElements.environment,
    body: BubbleConfig.defaultElements.body,
    hat: BubbleConfig.defaultElements.hat,
    onomatopoeia: BubbleConfig.defaultElements.onomatopoeia,
  },
}
