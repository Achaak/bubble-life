import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../../state'
import type { BubbleState, ClotheElementListItem } from '../../types'

export const addClotheInList = (
  state: BubbleState,
  action: PayloadAction<ClotheElementListItem>
): void => {
  state.elements.clothe.list = [...state.elements.clothe.list, action.payload]
}

export const removeClotheInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.clothe.list = state.elements.clothe.list.filter(
    (item) => item.id !== action.payload.id
  )
}

export const sortClothesInList = (state: BubbleState): void => {
  state.elements.clothe.list = state.elements.clothe.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}

export const resetClothe = (state: BubbleState): void => {
  state.elements.clothe = initialBubbleState.elements.clothe
}

export const setCurrentClothe = (
  state: BubbleState,
  action: PayloadAction<ClotheElementListItem>
): void => {
  state.elements.clothe.current = action.payload
}

export const resetCurrentClothe = (state: BubbleState): void => {
  state.elements.clothe.current = initialBubbleState.elements.clothe.default
}

export const transferClotheInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.clothe.list.length) {
    return
  }

  const newCurrent = state.elements.clothe.list[0]

  state.elements.clothe = {
    ...state.elements.clothe,
    current: newCurrent,
    list: state.elements.clothe.list.filter((item) => item.id !== newCurrent.id),
  }
}
