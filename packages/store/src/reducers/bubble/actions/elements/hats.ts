import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { BubbleStateElementsHatAction, BubbleStateElementsHatItemList } from '../../types'

export type AddHatInList = BubbleStateElementsHatItemList
export const addHatInList = (hat: AddHatInList): void => {
  store.dispatch(bubbleActions.addHatInList(hat))
}

export type RemoveHatInList = { id: string }
export const removeHatInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeHatInList({ id }))
}

export const resetHat = (): void => {
  store.dispatch(bubbleActions.resetHat())
}

export type SetActionHat = BubbleStateElementsHatAction
export const setActionHat = (hat: SetActionHat): void => {
  store.dispatch(bubbleActions.setActionHat(hat))
}

export const resetActionHat = (): void => {
  store.dispatch(bubbleActions.resetActionHat())
}
