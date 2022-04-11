import type {
  BubbleStateElementsEnvironmentAction,
  BubbleStateElementsEnvironmentItemList,
} from '../types'

export type AddEnvironmentInList = BubbleStateElementsEnvironmentItemList

export type RemoveEnvironmentInList = { id: string }

export type SetActionEnvironment = BubbleStateElementsEnvironmentAction
