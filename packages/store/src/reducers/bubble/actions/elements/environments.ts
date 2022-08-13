import type { AddEnvironmentInList, SetActionEnvironment } from '@bubble/types'
import { bubbleActions } from '../../index.js'
import { store } from '../../../../store.js'

export const addEnvironmentInList = (environment: AddEnvironmentInList): void => {
  store.dispatch(bubbleActions.addEnvironmentInList(environment))
}

export const removeEnvironmentInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeEnvironmentInList({ id }))
}

export const resetEnvironment = (): void => {
  store.dispatch(bubbleActions.resetEnvironment())
}

export const setActionEnvironment = (environment: SetActionEnvironment): void => {
  store.dispatch(bubbleActions.setActionEnvironment(environment))
}

export const resetActionEnvironment = (): void => {
  store.dispatch(bubbleActions.resetActionEnvironment())
}
