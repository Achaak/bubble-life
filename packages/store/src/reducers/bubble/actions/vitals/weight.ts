import { bubbleActions } from '../..'
import { store } from '../../../../store'

export type SetWeight = { value: number }
export const setWeight = (value: SetWeight): void => {
  store.dispatch(bubbleActions.setWeight(value))
}

export const resetWeight = (): void => {
  store.dispatch(bubbleActions.resetWeight())
}

export type AddWeight = { value: number }
export const addWeight = (value: AddWeight): void => {
  store.dispatch(bubbleActions.addWeight(value))
}

export type RemoveWeight = { value: number }
export const removeWeight = (value: RemoveWeight): void => {
  store.dispatch(bubbleActions.removeWeight(value))
}
