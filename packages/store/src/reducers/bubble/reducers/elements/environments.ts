import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../../state'
import type { BubbleState, EnvironmentElementListItem } from '../../types'

export const addEnvironmentInList = (
  state: BubbleState,
  action: PayloadAction<EnvironmentElementListItem>
): void => {
  state.elements.environment.list = [...state.elements.environment.list, action.payload]
}

export const removeEnvironmentInList = (
  state: BubbleState,
  action: PayloadAction<{ id: string }>
): void => {
  state.elements.environment.list = state.elements.environment.list.filter(
    (item) => item.id !== action.payload.id
  )
}

export const sortEnvironmentsInList = (state: BubbleState): void => {
  state.elements.environment.list = state.elements.environment.list.sort((a, b) => {
    if (a.importance < b.importance) {
      return -1
    }
    if (a.importance > b.importance) {
      return 1
    }
    return 0
  })
}

export const resetEnvironment = (state: BubbleState): void => {
  state.elements.environment = initialBubbleState.elements.environment
}

export const setCurrentEnvironment = (
  state: BubbleState,
  action: PayloadAction<EnvironmentElementListItem>
): void => {
  state.elements.environment.current = action.payload
}

export const resetCurrentEnvironment = (state: BubbleState): void => {
  state.elements.environment.current = initialBubbleState.elements.environment.default
}

export const transferEnvironmentInListToCurrent = (state: BubbleState): void => {
  if (!state.elements.environment.list.length) {
    return
  }

  const newCurrent = state.elements.environment.list[0]

  state.elements.environment = {
    ...state.elements.environment,
    current: newCurrent,
    list: state.elements.environment.list.filter((item) => item.id !== newCurrent.id),
  }
}
