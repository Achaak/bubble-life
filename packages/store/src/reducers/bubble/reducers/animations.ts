import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../state'
import type { BubbleAnimationAction, BubbleAnimationItemList, BubbleState } from '../types'

export const resetAnimation = (state: BubbleState): void => {
  state.animation = initialBubbleState.animation
}

export const addAnimationInList = (
  state: BubbleState,
  action: PayloadAction<BubbleAnimationItemList>
): void => {
  state.animation.list = [...state.animation.list, action.payload]
}

export const removeAnimationInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.animation.list = state.animation.list.filter((item) => item.id !== action.payload.id)
}

export const setActionAnimation = (
  state: BubbleState,
  action: PayloadAction<BubbleAnimationAction>
): void => {
  state.animation.action = action.payload
}

export const resetActionAnimation = (state: BubbleState): void => {
  state.animation.action = null
}
