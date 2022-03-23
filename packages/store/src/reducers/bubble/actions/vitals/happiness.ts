import { bubbleActions } from '../..'
import { store } from '../../../../store'

export const setHappiness = (value: { value: number }): void => {
  store.dispatch(bubbleActions.setHappiness(value))
}

export const resetHappiness = (): void => {
  store.dispatch(bubbleActions.resetHappiness())
}

export const addHappiness = (value: { value: number }): void => {
  store.dispatch(bubbleActions.addHappiness(value))
}

export const removeHappiness = (value: { value: number }): void => {
  store.dispatch(bubbleActions.removeHappiness(value))
}
