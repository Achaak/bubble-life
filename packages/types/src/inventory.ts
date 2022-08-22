export type InventoryItem = 'food' | 'medication';

export interface InventoryItemStock {
  type: InventoryItem;
  stock: number;
}
