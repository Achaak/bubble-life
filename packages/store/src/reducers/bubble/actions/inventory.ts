import type { InventoryItemType } from '@bubble/types/src/inventory'
import { bubbleActions } from '..'
import { store } from '../../../store'

export const addInventoryItem = (params: { type: InventoryItemType; number: number }): void => {
  store.dispatch(bubbleActions.addInventoryItem(params))
}

export const removeInventoryItem = (params: { type: InventoryItemType; number: number }): void => {
  store.dispatch(bubbleActions.removeInventoryItem(params))
}

export const hasInventoryItem = ({
  number,
  type,
}: {
  type: InventoryItemType
  number: number
}): boolean => {
  return store
    .getState()
    .bubble.inventory.some((item) => item.type === type && item.stock >= number)
}
