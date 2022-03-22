import { bubbleActions } from '../..'
import { store } from '../../../../store'

export const setSaturation = (value: number): void => {
  store.dispatch(bubbleActions.setSaturation(value))
}

export const resetSaturation = (): void => {
  store.dispatch(bubbleActions.resetSaturation())
}

export const addSaturation = (value: number): void => {
  store.dispatch(bubbleActions.addSaturation(value))
}

export const removeSaturation = (value: number): void => {
  store.dispatch(bubbleActions.removeSaturation(value))
}
