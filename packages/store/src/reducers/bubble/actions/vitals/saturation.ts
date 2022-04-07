import { bubbleActions } from '../..'
import { store } from '../../../../store'

export type SetSaturation = { value: number }
export const setSaturation = (value: SetSaturation): void => {
  store.dispatch(bubbleActions.setSaturation(value))
}

export const resetSaturation = (): void => {
  store.dispatch(bubbleActions.resetSaturation())
}

export type AddSaturation = { value: number }
export const addSaturation = (value: AddSaturation): void => {
  store.dispatch(bubbleActions.addSaturation(value))
}

export type RemoveSaturation = { value: number }
export const removeSaturation = (value: RemoveSaturation): void => {
  store.dispatch(bubbleActions.removeSaturation(value))
}
