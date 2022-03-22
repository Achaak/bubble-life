import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../../state'
import type { BubbleState, OnomatopoeiaElementListItem } from '../../types'

export const addOnomatopoeiaInList = (
  state: BubbleState,
  action: PayloadAction<OnomatopoeiaElementListItem>
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

export const sortOnomatopoeiasInList = (state: BubbleState): void => {
  state.elements.onomatopoeia.list = state.elements.onomatopoeia.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}

export const resetOnomatopoeia = (state: BubbleState): void => {
  state.elements.onomatopoeia = initialBubbleState.elements.onomatopoeia
}

export const setCurrentOnomatopoeia = (
  state: BubbleState,
  action: PayloadAction<OnomatopoeiaElementListItem>
): void => {
  state.elements.onomatopoeia.current = action.payload
}

export const resetCurrentOnomatopoeia = (state: BubbleState): void => {
  state.elements.onomatopoeia.current = initialBubbleState.elements.onomatopoeia.default
}

export const transferOnomatopoeiaInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.onomatopoeia.list.length) {
    return
  }

  const newCurrent = state.elements.onomatopoeia.list[0]

  state.elements.onomatopoeia = {
    ...state.elements.onomatopoeia,
    current: newCurrent,
    list: state.elements.onomatopoeia.list.filter((item) => item.id !== newCurrent.id),
  }
}
