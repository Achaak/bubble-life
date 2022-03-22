import { BubbleConfig } from '@bubble/configs/bubble'
import shortid from 'shortid'
import type { BubbleState } from './types'

export const initialBubbleState: BubbleState = {
  name: 'Bubble',
  animation: {
    current: null,
    default: {
      id: shortid(),
      importance: 3,
      name: 'default',
    },
    list: [],
  },
  inventory: BubbleConfig.defaultInventory,
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
