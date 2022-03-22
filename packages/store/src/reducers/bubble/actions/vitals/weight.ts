import { bubbleActions } from '../..'
import { store } from '../../../../store'

export const setWeight = (value: number): void => {
  store.dispatch(bubbleActions.setWeight(value))
}

export const resetWeight = (): void => {
  store.dispatch(bubbleActions.resetWeight())
}

export const addWeight = (value: number): void => {
  store.dispatch(bubbleActions.addWeight(value))
}

export const removeWeight = (value: number): void => {
  store.dispatch(bubbleActions.removeWeight(value))
}
