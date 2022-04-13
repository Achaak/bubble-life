import type { AddHappiness, RemoveHappiness, SetHappiness } from '@bubble/types'
import { bubbleActions } from '../../index.js'

export const setHappiness = (value: SetHappiness): void => {
  store.dispatch(bubbleActions.setHappiness(value))
}

export const resetHappiness = (): void => {
  store.dispatch(bubbleActions.resetHappiness())
}

export const addHappiness = (value: AddHappiness): void => {
  store.dispatch(bubbleActions.addHappiness(value))
}

export const removeHappiness = (value: RemoveHappiness): void => {
  store.dispatch(bubbleActions.removeHappiness(value))
}
