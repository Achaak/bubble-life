import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type {
  BubbleStateElementsClotheAction,
  BubbleStateElementsClotheItemList,
} from '../../types'

export const addClotheInList = (clothe: BubbleStateElementsClotheItemList): void => {
  store.dispatch(bubbleActions.addClotheInList(clothe))
}

export const removeClotheInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeClotheInList({ id }))
}

export const resetClothe = (): void => {
  store.dispatch(bubbleActions.resetClothe())
}

export const setActionClothe = (clothe: BubbleStateElementsClotheAction): void => {
  store.dispatch(bubbleActions.setActionClothe(clothe))
}

export const resetActionClothe = (): void => {
  store.dispatch(bubbleActions.resetActionClothe())
}
