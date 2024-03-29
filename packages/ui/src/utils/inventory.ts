import type { InventoryItem } from '@bubble/types';

export const getIconOfInventoryItem = (item: InventoryItem): string => {
  switch (item) {
    case 'food':
      return 'material-symbols:bakery-dining';
    default:
      return 'bx:x';
  }
};
