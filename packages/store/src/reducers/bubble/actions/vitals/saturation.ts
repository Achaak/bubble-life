import { bubbleActions } from '../..'
import { store } from '../../../../store'

export const setSaturation = (value: { value: number }): void => {
  store.dispatch(bubbleActions.setSaturation(value))
}

export const resetSaturation = (): void => {
  store.dispatch(bubbleActions.resetSaturation())
}

export const addSaturation = (value: { value: number }): void => {
  store.dispatch(bubbleActions.addSaturation(value))
}

export const removeSaturation = (value: { value: number }): void => {
  store.dispatch(bubbleActions.removeSaturation(value))
}
