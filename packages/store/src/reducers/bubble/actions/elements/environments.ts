import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type {
  BubbleStateElementsEnvironmentAction,
  BubbleStateElementsEnvironmentItemList,
} from '../../types'

export type AddEnvironmentInList = BubbleStateElementsEnvironmentItemList
export const addEnvironmentInList = (environment: AddEnvironmentInList): void => {
  store.dispatch(bubbleActions.addEnvironmentInList(environment))
}

export type RemoveEnvironmentInList = { id: string }
export const removeEnvironmentInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeEnvironmentInList({ id }))
}

export const resetEnvironment = (): void => {
  store.dispatch(bubbleActions.resetEnvironment())
}

export type SetActionEnvironment = BubbleStateElementsEnvironmentAction
export const setActionEnvironment = (environment: SetActionEnvironment): void => {
  store.dispatch(bubbleActions.setActionEnvironment(environment))
}

export const resetActionEnvironment = (): void => {
  store.dispatch(bubbleActions.resetActionEnvironment())
}
