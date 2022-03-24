import type { InventoryItem } from '@bubble/types'
import type React from 'react'
import { BxBaguette, BxX } from '../Icons'
import type { SVGComponentIcon } from '../Icons/types'

export const getIconOfInventoryItem = (item: InventoryItem): React.FC<SVGComponentIcon> => {
  switch (item) {
    case 'food':
      return BxBaguette
    default:
      return BxX
  }
}
