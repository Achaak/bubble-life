import { BubbleConfig } from '@bubble/configs'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { BubbleState } from '@bubble/types'

export const setTiredness = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  if (action.payload.value < 0) {
    state.vitals.tiredness = 0
  } else if (action.payload.value > BubbleConfig.vitals.tiredness.max) {
    state.vitals.tiredness = BubbleConfig.vitals.tiredness.max
  } else {
    state.vitals.tiredness = action.payload.value
  }
}

export const addTiredness = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.tiredness + action.payload.value

  state.vitals.tiredness =
    newValue > BubbleConfig.vitals.tiredness.max ? BubbleConfig.vitals.tiredness.max : newValue
}

export const removeTiredness = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.tiredness - action.payload.value

  state.vitals.tiredness = newValue < 0 ? 0 : newValue
}

export const resetTiredness = (state: BubbleState): void => {
  state.vitals.tiredness = BubbleConfig.vitals.tiredness.default
}
