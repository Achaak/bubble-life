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

export interface AnimationtListItem {
  id: string
  importance: 1 | 2 | 3
  name: Animation
}

export interface ElementListItem {
  id: string
  importance: 1 | 2 | 3
}

export interface EyesElementListItem extends ElementListItem {
  name: Eyes
}

export interface ClothesElementListItem extends ElementListItem {
  name: Clothes
}

export interface EnvironmentsElementListItem extends ElementListItem {
  name: Environments
}

export interface HatsElementListItem extends ElementListItem {
  name: Hats
}

export interface BodiesElementListItem extends ElementListItem {
  name: Bodies
}

export interface OnomatopoeiaElementListItem extends ElementListItem {
  name: Onomatopoeia
}

export interface BubbleStateElements {
  eyes: {
    default: Eyes
    current: Eyes
    list: EyesElementListItem[]
  }
  clothe: {
    default: Clothes
    current: Clothes
    list: ClothesElementListItem[]
  }
  environment: {
    default: Environments
    current: Environments
    list: EnvironmentsElementListItem[]
  }
  hat: {
    default: Hats
    current: Hats
    list: HatsElementListItem[]
  }
  body: {
    default: Bodies
    current: Bodies
    list: BodiesElementListItem[]
  }
  onomatopoeia: {
    default: Onomatopoeia
    current: Onomatopoeia
    list: OnomatopoeiaElementListItem[]
  }
}

export interface BubbleState {
  name: string
  animation: {
    default: Animation
    current: Animation
    list: AnimationtListItem[]
  }
  vitals: BubbleStateVitals
  elements: BubbleStateElements
}

export const initialBubbleState: BubbleState = {
  name: 'Bubble',
  animation: {
    current: 'default',
    default: 'default',
    list: [],
  },
  vitals: {
    weight: BubbleConfig.vitals.weight.start,
    saturation: BubbleConfig.vitals.saturation.default,
    happiness: BubbleConfig.vitals.happiness.default,
    tiredness: BubbleConfig.vitals.tiredness.default,
    health: BubbleConfig.vitals.health.default,
  },
  elements: {
    eyes: {
      default: BubbleConfig.defaultElements.eyes,
      current: BubbleConfig.defaultElements.eyes,
      list: [],
    },
    clothe: {
      default: BubbleConfig.defaultElements.clothe,
      current: BubbleConfig.defaultElements.clothe,
      list: [],
    },
    environment: {
      default: BubbleConfig.defaultElements.environment,
      current: BubbleConfig.defaultElements.environment,
      list: [],
    },
    body: {
      default: BubbleConfig.defaultElements.body,
      current: BubbleConfig.defaultElements.body,
      list: [],
    },
    hat: {
      default: BubbleConfig.defaultElements.hat,
      current: BubbleConfig.defaultElements.hat,
      list: [],
    },
    onomatopoeia: {
      default: BubbleConfig.defaultElements.onomatopoeia,
      current: BubbleConfig.defaultElements.onomatopoeia,
      list: [],
    },
  },
}
