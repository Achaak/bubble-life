import type { AddWeight, RemoveWeight, SetWeight } from '@bubble/types'
import { bubbleActions } from '../../index.js'
import { store } from '../../../../store.js'

export const setWeight = (value: SetWeight): void => {
  store.dispatch(bubbleActions.setWeight(value))
}

export const resetWeight = (): void => {
  store.dispatch(bubbleActions.resetWeight())
}

export const addWeight = (value: AddWeight): void => {
  store.dispatch(bubbleActions.addWeight(value))
}

export const removeWeight = (value: RemoveWeight): void => {
  store.dispatch(bubbleActions.removeWeight(value))
}
