import { BubbleConfig } from '@bubble/configs';
import type { BubbleState } from '@bubble/types';

export const initialBubbleState: BubbleState = {
  name: BubbleConfig.defaultName,
  animation: {
    action: null,
    default: 'default',
    list: [],
  },
  inventory: BubbleConfig.defaultInventory,
  vitals: {
    weight: BubbleConfig.vitals.weight.default,
    saturation: BubbleConfig.vitals.saturation.default,
    happiness: BubbleConfig.vitals.happiness.default,
    tiredness: BubbleConfig.vitals.tiredness.default,
    health: BubbleConfig.vitals.health.default,
  },
  message: {
    current: null,
    waitingList: [],
  },
  elements: {
    eyes: {
      default: BubbleConfig.defaultElements.eyes,
      action: null,
      list: [],
    },
    clothe: {
      default: BubbleConfig.defaultElements.clothe,
      action: null,
      list: [],
    },
    environment: {
      default: BubbleConfig.defaultElements.environment,
      action: null,
      list: [],
    },
    body: {
      default: BubbleConfig.defaultElements.body,
      action: null,
      list: [],
    },
    hat: {
      default: BubbleConfig.defaultElements.hat,
      action: null,
      list: [],
    },
    onomatopoeia: {
      default: BubbleConfig.defaultElements.onomatopoeia,
      action: null,
      list: [],
    },
  },
};
