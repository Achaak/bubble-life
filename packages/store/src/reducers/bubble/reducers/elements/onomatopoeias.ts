import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../../state.js'
import type {
  BubbleStateElementsOnomatopoeiaAction,
  BubbleStateElementsOnomatopoeiaItemList,
  BubbleState,
} from '@bubble/types'

export const addOnomatopoeiaInList = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsOnomatopoeiaItemList>
): void => {
  state.elements.onomatopoeia.list = [...state.elements.onomatopoeia.list, action.payload]
}

export const removeOnomatopoeiaInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.onomatopoeia.list = state.elements.onomatopoeia.list.filter(
    (item) => item.id !== action.payload.id
  )
}

export const resetOnomatopoeia = (state: BubbleState): void => {
  state.elements.onomatopoeia = initialBubbleState.elements.onomatopoeia
}

export const setActionOnomatopoeia = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsOnomatopoeiaAction>
): void => {
  state.elements.onomatopoeia.action = action.payload
}

export const resetActionOnomatopoeia = (state: BubbleState): void => {
  state.elements.onomatopoeia.action = null
}
