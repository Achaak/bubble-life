import { BubbleConfig } from '@bubble/configs'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { BubbleState } from '@bubble/types'

export const setWeight = (state: BubbleState, action: PayloadAction<{ value: number }>): void => {
  if (action.payload.value < BubbleConfig.vitals.weight.min) {
    state.vitals.weight = BubbleConfig.vitals.weight.min
  } else if (action.payload.value > BubbleConfig.vitals.weight.max) {
    state.vitals.weight = BubbleConfig.vitals.weight.max
  } else {
    state.vitals.weight = action.payload.value
  }
}

export const addWeight = (state: BubbleState, action: PayloadAction<{ value: number }>): void => {
  const newValue = state.vitals.weight + action.payload.value

  state.vitals.weight =
    newValue > BubbleConfig.vitals.weight.max ? BubbleConfig.vitals.weight.max : newValue
}

export const removeWeight = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.weight - action.payload.value

  state.vitals.weight =
    newValue < BubbleConfig.vitals.weight.min ? BubbleConfig.vitals.weight.min : newValue
}

export const resetWeight = (state: BubbleState): void => {
  state.vitals.weight = BubbleConfig.vitals.weight.default
}
