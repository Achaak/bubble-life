import { bubbleActions } from '../..'
import { store } from '../../../../store'

export const setHealth = (value: number): void => {
  store.dispatch(bubbleActions.setHealth(value))
}

export const resetHealth = (): void => {
  store.dispatch(bubbleActions.resetHealth())
}

export const addHealth = (value: number): void => {
  store.dispatch(bubbleActions.addHealth(value))
}

export const removeHealth = (value: number): void => {
  store.dispatch(bubbleActions.removeHealth(value))
}
