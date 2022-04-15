import type { AddHealth, RemoveHealth, SetHealth } from '@bubble/types'
import { bubbleActions } from '../../index'
import { store } from '../../../../store'

export const setHealth = (value: SetHealth): void => {
  store.dispatch(bubbleActions.setHealth(value))
}

export const resetHealth = (): void => {
  store.dispatch(bubbleActions.resetHealth())
}

export const addHealth = (value: AddHealth): void => {
  store.dispatch(bubbleActions.addHealth(value))
}

export const removeHealth = (value: RemoveHealth): void => {
  store.dispatch(bubbleActions.removeHealth(value))
}
