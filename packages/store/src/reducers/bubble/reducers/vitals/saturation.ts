import { BubbleConfig } from '@bubble/configs/bubble'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { BubbleState } from '../../types'

export const setSaturation = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  if (action.payload.value < 0) {
    state.vitals.saturation = 0
  } else if (action.payload.value > BubbleConfig.vitals.saturation.max) {
    state.vitals.saturation = BubbleConfig.vitals.saturation.max
  } else {
    state.vitals.saturation = action.payload.value
  }
}

export const addSaturation = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.saturation + action.payload.value

  state.vitals.saturation =
    newValue > BubbleConfig.vitals.saturation.max ? BubbleConfig.vitals.saturation.max : newValue
}

export const removeSaturation = (
  state: BubbleState,
  action: PayloadAction<{ value: number }>
): void => {
  const newValue = state.vitals.saturation - action.payload.value

  state.vitals.saturation = newValue < 0 ? 0 : newValue
}

export const resetSaturation = (state: BubbleState): void => {
  state.vitals.saturation = BubbleConfig.vitals.saturation.default
}
