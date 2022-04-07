import { bubbleActions } from '../..'
import { store } from '../../../../store'

export type SetHappiness = { value: number }
export const setHappiness = (value: SetHappiness): void => {
  store.dispatch(bubbleActions.setHappiness(value))
}

export const resetHappiness = (): void => {
  store.dispatch(bubbleActions.resetHappiness())
}

export type AddHappiness = { value: number }
export const addHappiness = (value: AddHappiness): void => {
  store.dispatch(bubbleActions.addHappiness(value))
}

export type RemoveHappiness = { value: number }
export const removeHappiness = (value: RemoveHappiness): void => {
  store.dispatch(bubbleActions.removeHappiness(value))
}
