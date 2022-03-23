import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../../state'
import type {
  BubbleStateElementsHatAction,
  BubbleStateElementsHatItemList,
  BubbleState,
} from '../../types'

export const addHatInList = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsHatItemList>
): void => {
  state.elements.hat.list = [...state.elements.hat.list, action.payload]
}

export const removeHatInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.hat.list = state.elements.hat.list.filter((item) => item.id !== action.payload.id)
}

export const resetHat = (state: BubbleState): void => {
  state.elements.hat = initialBubbleState.elements.hat
}

export const setActionHat = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsHatAction>
): void => {
  state.elements.hat.action = action.payload
}

export const resetActionHat = (state: BubbleState): void => {
  state.elements.hat.action = null
}
