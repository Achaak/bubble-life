import type { InventoryItem } from '@bubble/types'

export const getIconOfInventoryItem = (item: InventoryItem): string => {
  switch (item) {
    case 'food':
      return 'bakery_dining'
    default:
      return 'close'
  }
}
