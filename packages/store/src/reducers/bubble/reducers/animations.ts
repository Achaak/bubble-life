import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../state'
import type { AnimationtListItem, BubbleState } from '../types'

export const addAnimationInList = (
  state: BubbleState,
  action: PayloadAction<AnimationtListItem>
): void => {
  state.animation.list = [...state.animation.list, action.payload]
}

export const removeAnimationInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.animation.list = state.animation.list.filter((item) => item.id !== action.payload.id)
}

export const sortAnimationsInList = (state: BubbleState): void => {
  state.animation.list = state.animation.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}

export const resetAnimation = (state: BubbleState): void => {
  state.animation = initialBubbleState.animation
}

export const setCurrentAnimation = (
  state: BubbleState,
  action: PayloadAction<AnimationtListItem>
): void => {
  state.animation.current = action.payload
}

export const resetCurrentAnimation = (state: BubbleState): void => {
  state.animation.current = null
}

export const transferAnimationInListToCurrent = (state: BubbleState): void => {
  if (!state.animation.list.length) {
    return
  }

  const newCurrent = state.animation.list[0]

  state.animation = {
    ...state.animation,
    current: newCurrent,
    list: state.animation.list.filter((item) => item.id !== newCurrent.id),
  }
}
