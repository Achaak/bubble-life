import { bubbleActions } from '../..'
import { store } from '../../../../store'

export const setTiredness = (value: number): void => {
  store.dispatch(bubbleActions.setTiredness(value))
}

export const resetTiredness = (): void => {
  store.dispatch(bubbleActions.resetTiredness())
}

export const addTiredness = (value: number): void => {
  store.dispatch(bubbleActions.addTiredness(value))
}

export const removeTiredness = (value: number): void => {
  store.dispatch(bubbleActions.removeTiredness(value))
}
