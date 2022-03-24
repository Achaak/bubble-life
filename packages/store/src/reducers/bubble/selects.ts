import type { InventoryItemStock } from '@bubble/types/src/inventory'
import type { RootState } from '../../store'

import type { BubbleStateElements, BubbleStateVitals } from './types'

export const selectName = (state: RootState): string => state.bubble.name
export const selectVitals = (state: RootState): BubbleStateVitals => state.bubble.vitals
export const selectElements = (state: RootState): BubbleStateElements => state.bubble.elements
export const selectInventory = (state: RootState): InventoryItemStock[] => state.bubble.inventory
