import type { Animation } from '../../animation'
import type { Bodies, Clothes, Environments, Eyes, Hats, Onomatopoeias } from '../../bubble'
import type { InventoryItemStock } from '../../inventory'
import type { Message } from '../../message'

export interface BubbleStateVitals {
  weight: number
  saturation: number
  happiness: number
  tiredness: number
  health: number
}

export interface BubbleStateElementsEyesAction {
  actionId: string
  name: Eyes
}

export interface BubbleStateElementsEyesItemList {
  id: string
  importance: 1 | 2 | 3
  name: Eyes
}

export interface BubbleStateElementsClotheAction {
  actionId: string
  name: Clothes
}

export interface BubbleStateElementsClotheItemList {
  id: string
  importance: 1 | 2 | 3
  name: Clothes
}

export interface BubbleStateElementsEnvironmentAction {
  actionId: string
  name: Environments
}

export interface BubbleStateElementsEnvironmentItemList {
  id: string
  importance: 1 | 2 | 3
  name: Environments
}

export interface BubbleStateElementsBodyAction {
  actionId: string
  name: Bodies
}

export interface BubbleStateElementsBodyItemList {
  id: string
  importance: 1 | 2 | 3
  name: Bodies
}

export interface BubbleStateElementsHatAction {
  actionId: string
  name: Hats
}

export interface BubbleStateElementsHatItemList {
  id: string
  importance: 1 | 2 | 3
  name: Hats
}

export interface BubbleStateElementsOnomatopoeiaAction {
  actionId: string
  name: Onomatopoeias
}

export interface BubbleStateElementsOnomatopoeiaItemList {
  id: string
  importance: 1 | 2 | 3
  name: Onomatopoeias
}

export interface BubbleStateElements {
  eyes: {
    default: Eyes
    action: BubbleStateElementsEyesAction | null
    list: BubbleStateElementsEyesItemList[]
  }
  clothe: {
    default: Clothes
    action: BubbleStateElementsClotheAction | null
    list: BubbleStateElementsClotheItemList[]
  }
  environment: {
    default: Environments
    action: BubbleStateElementsEnvironmentAction | null
    list: BubbleStateElementsEnvironmentItemList[]
  }
  hat: {
    default: Hats
    action: BubbleStateElementsHatAction | null
    list: BubbleStateElementsHatItemList[]
  }
  body: {
    default: Bodies
    action: BubbleStateElementsBodyAction | null
    list: BubbleStateElementsBodyItemList[]
  }
  onomatopoeia: {
    default: Onomatopoeias
    action: BubbleStateElementsOnomatopoeiaAction | null
    list: BubbleStateElementsOnomatopoeiaItemList[]
  }
}

export interface BubbleAnimationAction {
  actionId: string
  name: Animation
}

export interface BubbleAnimationItemList {
  id: string
  importance: 1 | 2 | 3
  name: Animation
}

export interface BubbleStateMessage {
  current: Message | null
  waitingList: Message[]
}

export interface BubbleState {
  name: string
  animation: {
    default: Animation
    action: BubbleAnimationAction | null
    list: BubbleAnimationItemList[]
  }
  message: BubbleStateMessage
  vitals: BubbleStateVitals
  elements: BubbleStateElements
  inventory: InventoryItemStock[]
}
