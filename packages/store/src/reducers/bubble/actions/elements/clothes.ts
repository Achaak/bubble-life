import { getBubble } from '..'
import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { ClotheElementListItem } from '../../types'

export const addClotheInList = (ClotheElementListItem: ClotheElementListItem): void => {
  store.dispatch(bubbleActions.addClotheInList(ClotheElementListItem))
  store.dispatch(bubbleActions.sortClothesInList())
  store.dispatch(bubbleActions.transferClotheInListToCurrent())
}

export const removeClotheInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeClotheInList({ id }))
  store.dispatch(bubbleActions.sortClothesInList())
  store.dispatch(bubbleActions.transferClotheInListToCurrent())
}

export const resetClothe = (): void => {
  store.dispatch(bubbleActions.resetClothe())
  store.dispatch(bubbleActions.transferClotheInListToCurrent())
}

export const setCurrentClothe = ({ id }: { id: string }): void => {
  const {
    elements: {
      clothe: { list: clotheList },
    },
  } = getBubble()

  const clothe = clotheList.find((item) => item.id === id)

  if (!clothe) {
    return
  }
  store.dispatch(bubbleActions.setCurrentClothe(clothe))
  store.dispatch(bubbleActions.removeClotheInList({ id }))
}

export const resetCurrentClothe = (): void => {
  store.dispatch(bubbleActions.resetCurrentClothe())
  store.dispatch(bubbleActions.transferClotheInListToCurrent())
}

export const removeClotheAllOver = ({ id }: { id: string }): void => {
  removeClotheInList({ id })
  resetCurrentClothe()
  store.dispatch(bubbleActions.transferClotheInListToCurrent())
}
