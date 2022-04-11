import type { AddInventoryItem, HasInventoryItem, RemoveInventoryItem } from '@bubble/types'
import { getBubble } from '.'
import { bubbleActions } from '..'
import { store } from '../../../store'

export const addInventoryItem = (params: AddInventoryItem): void => {
  store.dispatch(bubbleActions.addInventoryItem(params))
}

export const removeInventoryItem = (params: RemoveInventoryItem): void => {
  store.dispatch(bubbleActions.removeInventoryItem(params))
}

export const hasInventoryItem = ({ number, type }: HasInventoryItem): boolean => {
  const { inventory } = getBubble()

  return inventory.some((item) => item.type === type && item.stock >= number)
}
