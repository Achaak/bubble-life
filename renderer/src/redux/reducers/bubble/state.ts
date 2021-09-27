import { BubbleConfig } from '@configs/bubble'
import { Animation } from '@src/types/animation'
import { Bodies, Clothes, Environments, Eyes, Hats, Onomatopoeia } from '@src/types/bubble'
import shortid from 'shortid'

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
export interface ClotheElementListItem extends ElementListItem {
  name: Clothes
}
export interface EnvironmentElementListItem extends ElementListItem {
  name: Environments
}
export interface HatElementListItem extends ElementListItem {
  name: Hats
}
export interface BodyElementListItem extends ElementListItem {
  name: Bodies
}
export interface OnomatopoeiaElementListItem extends ElementListItem {
  name: Onomatopoeia
}

export interface BubbleStateElements {
  eyes: {
    default: EyesElementListItem
    current: EyesElementListItem
    list: EyesElementListItem[]
  }
  clothe: {
    default: ClotheElementListItem
    current: ClotheElementListItem
    list: ClotheElementListItem[]
  }
  environment: {
    default: EnvironmentElementListItem
    current: EnvironmentElementListItem
    list: EnvironmentElementListItem[]
  }
  hat: {
    default: HatElementListItem
    current: HatElementListItem
    list: HatElementListItem[]
  }
  body: {
    default: BodyElementListItem
    current: BodyElementListItem
    list: BodyElementListItem[]
  }
  onomatopoeia: {
    default: OnomatopoeiaElementListItem
    current: OnomatopoeiaElementListItem
    list: OnomatopoeiaElementListItem[]
  }
}

export interface BubbleState {
  name: string
  animation: {
    default: AnimationtListItem
    current: AnimationtListItem
    list: AnimationtListItem[]
  }
  vitals: BubbleStateVitals
  elements: BubbleStateElements
}

export const initialBubbleState: BubbleState = {
  name: 'Bubble',
  animation: {
    current: {
      id: shortid(),
      importance: 3,
      name: 'default',
    },
    default: {
      id: shortid(),
      importance: 3,
      name: 'default',
    },
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
      default: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.eyes,
      },
      current: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.eyes,
      },
      list: [],
    },
    clothe: {
      default: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.clothe,
      },
      current: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.clothe,
      },
      list: [],
    },
    environment: {
      default: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.environment,
      },
      current: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.environment,
      },
      list: [],
    },
    body: {
      default: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.body,
      },
      current: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.body,
      },
      list: [],
    },
    hat: {
      default: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.hat,
      },
      current: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.hat,
      },
      list: [],
    },
    onomatopoeia: {
      default: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.onomatopoeia,
      },
      current: {
        id: shortid(),
        importance: 3,
        name: BubbleConfig.defaultElements.onomatopoeia,
      },
      list: [],
    },
  },
}
