import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../../state'
import type { BubbleState, HatElementListItem } from '../../types'

export const addHatInList = (
  state: BubbleState,
  action: PayloadAction<HatElementListItem>
): void => {
  state.elements.hat.list = [...state.elements.hat.list, action.payload]
}

export const removeHatInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.hat.list = state.elements.hat.list.filter((item) => item.id !== action.payload.id)
}

export const sortHatsInList = (state: BubbleState): void => {
  state.elements.hat.list = state.elements.hat.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}

export const resetHat = (state: BubbleState): void => {
  state.elements.hat = initialBubbleState.elements.hat
}

export const setCurrentHat = (
  state: BubbleState,
  action: PayloadAction<HatElementListItem>
): void => {
  state.elements.hat.current = action.payload
}

export const resetCurrentHat = (state: BubbleState): void => {
  state.elements.hat.current = initialBubbleState.elements.hat.default
}

export const transferHatInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.hat.list.length) {
    return
  }

  const newCurrent = state.elements.hat.list[0]

  state.elements.hat = {
    ...state.elements.hat,
    current: newCurrent,
    list: state.elements.hat.list.filter((item) => item.id !== newCurrent.id),
  }
}
