import { bubbleActions } from '../..'
import { store } from '../../../../store'

export type SetTiredness = { value: number }
export const setTiredness = (value: SetTiredness): void => {
  store.dispatch(bubbleActions.setTiredness(value))
}

export const resetTiredness = (): void => {
  store.dispatch(bubbleActions.resetTiredness())
}

export type AddTiredness = { value: number }
export const addTiredness = (value: AddTiredness): void => {
  store.dispatch(bubbleActions.addTiredness(value))
}

export type RemoveTiredness = { value: number }
export const removeTiredness = (value: RemoveTiredness): void => {
  store.dispatch(bubbleActions.removeTiredness(value))
}
