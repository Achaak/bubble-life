import type {
  BubbleStateElementsEnvironmentAction,
  BubbleStateElementsEnvironmentItemList,
} from '../types.js'

export type AddEnvironmentInList = BubbleStateElementsEnvironmentItemList

export type RemoveEnvironmentInList = { id: string }

export type SetActionEnvironment = BubbleStateElementsEnvironmentAction
