import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../../state.js'
import type {
  BubbleStateElementsEnvironmentAction,
  BubbleStateElementsEnvironmentItemList,
  BubbleState,
} from '@bubble/types'

export const addEnvironmentInList = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsEnvironmentItemList>
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

export const resetEnvironment = (state: BubbleState): void => {
  state.elements.environment = initialBubbleState.elements.environment
}

export const setActionEnvironment = (
  state: BubbleState,
  action: PayloadAction<BubbleStateElementsEnvironmentAction>
): void => {
  state.elements.environment.action = action.payload
}

export const resetActionEnvironment = (state: BubbleState): void => {
  state.elements.environment.action = null
}
