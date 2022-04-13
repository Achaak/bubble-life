import type { BubbleStateElements, BubbleStateMessage, BubbleStateVitals } from '@bubble/types'
import type { InventoryItemStock } from '@bubble/types'
import type { RootState } from '../../store.js'

export const selectName = (state: RootState): string => state.bubble.name
export const selectVitals = (state: RootState): BubbleStateVitals => state.bubble.vitals
export const selectElements = (state: RootState): BubbleStateElements => state.bubble.elements
export const selectInventory = (state: RootState): InventoryItemStock[] => state.bubble.inventory
export const selectMessage = (state: RootState): BubbleStateMessage => state.bubble.message
