import type { InventoryItem } from './../../inventory'

export type AddInventoryItem = { type: InventoryItem; number: number }

export type RemoveInventoryItem = { type: InventoryItem; number: number }

export type HasInventoryItem = {
  type: InventoryItem
  number: number
}
