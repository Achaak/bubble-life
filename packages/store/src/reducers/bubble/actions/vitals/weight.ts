import { bubbleActions } from '../..'
import { store } from '../../../../store'

export const setWeight = (value: { value: number }): void => {
  store.dispatch(bubbleActions.setWeight(value))
}

export const resetWeight = (): void => {
  store.dispatch(bubbleActions.resetWeight())
}

export const addWeight = (value: { value: number }): void => {
  store.dispatch(bubbleActions.addWeight(value))
}

export const removeWeight = (value: { value: number }): void => {
  store.dispatch(bubbleActions.removeWeight(value))
}
