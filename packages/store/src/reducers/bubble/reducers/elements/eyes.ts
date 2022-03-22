import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../../state'
import type { BubbleState, EyesElementListItem } from '../../types'

export const addEyesInList = (
  state: BubbleState,
  action: PayloadAction<EyesElementListItem>
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

export const sortEyesInList = (state: BubbleState): void => {
  state.elements.eyes.list = state.elements.eyes.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}

export const resetEyes = (state: BubbleState): void => {
  state.elements.eyes = initialBubbleState.elements.eyes
}

export const setCurrentEyes = (
  state: BubbleState,
  action: PayloadAction<EyesElementListItem>
): void => {
  state.elements.eyes.current = action.payload
}

export const resetCurrentEyes = (state: BubbleState): void => {
  state.elements.eyes.current = initialBubbleState.elements.eyes.default
}

export const transferEyesInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.eyes.list.length) {
    return
  }

  const newCurrent = state.elements.eyes.list[0]

  state.elements.eyes = {
    ...state.elements.eyes,
    current: newCurrent,
    list: state.elements.eyes.list.filter((item) => item.id !== newCurrent.id),
  }
}
