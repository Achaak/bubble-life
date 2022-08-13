import { bubbleActions } from '../../index.js'
import { store } from '../../../../store.js'
import type { AddClotheInList, SetActionClothe } from '@bubble/types'

export const addClotheInList = (clothe: AddClotheInList): void => {
  store.dispatch(bubbleActions.addClotheInList(clothe))
}

export const removeClotheInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeClotheInList({ id }))
}

export const resetClothe = (): void => {
  store.dispatch(bubbleActions.resetClothe())
}

export const setActionClothe = (clothe: SetActionClothe): void => {
  store.dispatch(bubbleActions.setActionClothe(clothe))
}

export const resetActionClothe = (): void => {
  store.dispatch(bubbleActions.resetActionClothe())
}
