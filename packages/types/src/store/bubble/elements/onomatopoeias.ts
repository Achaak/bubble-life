import type {
  BubbleStateElementsOnomatopoeiaAction,
  BubbleStateElementsOnomatopoeiaItemList,
} from '../types.js'

export type AddOnomatopoeiaInList = BubbleStateElementsOnomatopoeiaItemList

export type RemoveOnomatopoeiaInList = { id: string }

export type SetActionOnomatopoeia = BubbleStateElementsOnomatopoeiaAction
