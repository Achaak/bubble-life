import type { InventoryItem } from '@bubble/types/src/inventory'
import { getBubble } from '.'
import { bubbleActions } from '..'
import { store } from '../../../store'

export const addInventoryItem = (params: { type: InventoryItem; number: number }): void => {
  store.dispatch(bubbleActions.addInventoryItem(params))
}

export const removeInventoryItem = (params: { type: InventoryItem; number: number }): void => {
  store.dispatch(bubbleActions.removeInventoryItem(params))
}

export const hasInventoryItem = ({
  number,
  type,
}: {
  type: InventoryItem
  number: number
}): boolean => {
  const { inventory } = getBubble()

  return inventory.some((item) => item.type === type && item.stock >= number)
}
