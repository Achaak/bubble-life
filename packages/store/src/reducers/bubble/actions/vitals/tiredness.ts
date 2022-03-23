import { bubbleActions } from '../..'
import { store } from '../../../../store'

export const setTiredness = (value: { value: number }): void => {
  store.dispatch(bubbleActions.setTiredness(value))
}

export const resetTiredness = (): void => {
  store.dispatch(bubbleActions.resetTiredness())
}

export const addTiredness = (value: { value: number }): void => {
  store.dispatch(bubbleActions.addTiredness(value))
}

export const removeTiredness = (value: { value: number }): void => {
  store.dispatch(bubbleActions.removeTiredness(value))
}
