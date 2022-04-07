import type { InventoryItem } from '@bubble/types/src/inventory'
import { getBubble } from '.'
import { bubbleActions } from '..'
import { store } from '../../../store'

export type AddInventoryItem = { type: InventoryItem; number: number }
export const addInventoryItem = (params: AddInventoryItem): void => {
  store.dispatch(bubbleActions.addInventoryItem(params))
}

export type RemoveInventoryItem = { type: InventoryItem; number: number }
export const removeInventoryItem = (params: RemoveInventoryItem): void => {
  store.dispatch(bubbleActions.removeInventoryItem(params))
}

export type HasInventoryItem = {
  type: InventoryItem
  number: number
}
export const hasInventoryItem = ({ number, type }: HasInventoryItem): boolean => {
  const { inventory } = getBubble()

  return inventory.some((item) => item.type === type && item.stock >= number)
}
