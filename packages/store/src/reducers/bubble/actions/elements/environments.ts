import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type {
  BubbleStateElementsEnvironmentAction,
  BubbleStateElementsEnvironmentItemList,
} from '../../types'

export const addEnvironmentInList = (environment: BubbleStateElementsEnvironmentItemList): void => {
  store.dispatch(bubbleActions.addEnvironmentInList(environment))
}

export const removeEnvironmentInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeEnvironmentInList({ id }))
}

export const resetEnvironment = (): void => {
  store.dispatch(bubbleActions.resetEnvironment())
}

export const setActionEnvironment = (environment: BubbleStateElementsEnvironmentAction): void => {
  store.dispatch(bubbleActions.setActionEnvironment(environment))
}

export const resetActionEnvironment = (): void => {
  store.dispatch(bubbleActions.resetActionEnvironment())
}
