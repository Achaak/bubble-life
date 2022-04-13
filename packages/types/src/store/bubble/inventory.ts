import type { InventoryItem } from '@/src/inventory.js'

export type AddInventoryItem = { type: InventoryItem; number: number }

export type RemoveInventoryItem = { type: InventoryItem; number: number }

export type HasInventoryItem = {
  type: InventoryItem
  number: number
}
