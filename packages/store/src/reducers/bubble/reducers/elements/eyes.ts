import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../../state.js'
import type {
  BubbleStateElementsEyesAction,
  BubbleStateElementsEyesItemList,
  BubbleState,
} from '@bubble/types'

export const addEyesInList = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsEyesItemList>
): void => {
  state.elements.eyes.list = [...state.elements.eyes.list, action.payload]
}

export const removeEyesInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.eyes.list = state.elements.eyes.list.filter(
    (item) => item.id !== action.payload.id
  )
}

export const resetEyes = (state: BubbleState): void => {
  state.elements.eyes = initialBubbleState.elements.eyes
}

export const setActionEyes = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsEyesAction>
): void => {
  state.elements.eyes.action = action.payload
}

export const resetActionEyes = (state: BubbleState): void => {
  state.elements.eyes.action = null
}
