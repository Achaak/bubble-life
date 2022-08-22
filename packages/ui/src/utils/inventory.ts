import type { InventoryItem } from '@bubble/types';

export const getIconOfInventoryItem = (item: InventoryItem): string => {
  switch (item) {
    case 'food':
      return 'material-symbols:bakery-dining';
    case 'medication':
      return 'material-symbols:medication-outline';
    default:
      return 'bx:x';
  }
};
