import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { BubbleStateElementsHatAction, BubbleStateElementsHatItemList } from '../../types'

export const addHatInList = (hat: BubbleStateElementsHatItemList): void => {
  store.dispatch(bubbleActions.addHatInList(hat))
}

export const removeHatInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeHatInList({ id }))
}

export const resetHat = (): void => {
  store.dispatch(bubbleActions.resetHat())
}

export const setActionHat = (hat: BubbleStateElementsHatAction): void => {
  store.dispatch(bubbleActions.setActionHat(hat))
}

export const resetActionHat = (): void => {
  store.dispatch(bubbleActions.resetActionHat())
}
