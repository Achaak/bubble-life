import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../../state'
import type { BodyElementListItem, BubbleState } from '../../types'

export const addBodyInList = (
  state: BubbleState,
  action: PayloadAction<BodyElementListItem>
): void => {
  state.elements.body.list = [...state.elements.body.list, action.payload]
}

export const removeBodyInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.body.list = state.elements.body.list.filter(
    (item) => item.id !== action.payload.id
  )
}

export const sortBodiesInList = (state: BubbleState): void => {
  state.elements.body.list = state.elements.body.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}

export const resetBody = (state: BubbleState): void => {
  state.elements.body = initialBubbleState.elements.body
}

export const setCurrentBody = (
  state: BubbleState,
  action: PayloadAction<BodyElementListItem>
): void => {
  state.elements.body.current = action.payload
}

export const resetCurrentBody = (state: BubbleState): void => {
  state.elements.body.current = initialBubbleState.elements.body.default
}

export const transferBodyInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.body.list.length) {
    return
  }

  const newCurrent = state.elements.body.list[0]

  state.elements.body = {
    ...state.elements.body,
    current: newCurrent,
    list: state.elements.body.list.filter((item) => item.id !== newCurrent.id),
  }
}
