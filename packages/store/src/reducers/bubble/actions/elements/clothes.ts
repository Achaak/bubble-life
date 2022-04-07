import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type {
  BubbleStateElementsClotheAction,
  BubbleStateElementsClotheItemList,
} from '../../types'

export type AddClotheInList = BubbleStateElementsClotheItemList
export const addClotheInList = (clothe: AddClotheInList): void => {
  store.dispatch(bubbleActions.addClotheInList(clothe))
}

export type RemoveClotheInList = { id: string }
export const removeClotheInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeClotheInList({ id }))
}

export const resetClothe = (): void => {
  store.dispatch(bubbleActions.resetClothe())
}

export type SetActionClothe = BubbleStateElementsClotheAction
export const setActionClothe = (clothe: SetActionClothe): void => {
  store.dispatch(bubbleActions.setActionClothe(clothe))
}

export const resetActionClothe = (): void => {
  store.dispatch(bubbleActions.resetActionClothe())
}
