import { bubbleActions } from '../..'
import { store } from '../../../../store'

export type SetHealth = { value: number }
export const setHealth = (value: SetHealth): void => {
  store.dispatch(bubbleActions.setHealth(value))
}

export const resetHealth = (): void => {
  store.dispatch(bubbleActions.resetHealth())
}

export type AddHealth = { value: number }
export const addHealth = (value: AddHealth): void => {
  store.dispatch(bubbleActions.addHealth(value))
}

export type RemoveHealth = { value: number }
export const removeHealth = (value: RemoveHealth): void => {
  store.dispatch(bubbleActions.removeHealth(value))
}
