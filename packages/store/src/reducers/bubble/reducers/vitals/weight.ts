import { BubbleConfig } from '@bubble/configs/bubble'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { BubbleState } from '../../types'

export const setWeight = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < BubbleConfig.vitals.weight.min) {
    state.vitals.weight = BubbleConfig.vitals.weight.min
  } else if (action.payload > BubbleConfig.vitals.weight.max) {
    state.vitals.weight = BubbleConfig.vitals.weight.max
  } else {
    state.vitals.weight = action.payload
  }
}

export const addWeight = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.weight + action.payload

  state.vitals.weight =
    newValue > BubbleConfig.vitals.weight.max ? BubbleConfig.vitals.weight.max : newValue
}

export const removeWeight = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.weight - action.payload

  state.vitals.weight =
    newValue < BubbleConfig.vitals.weight.min ? BubbleConfig.vitals.weight.min : newValue
}

export const resetWeight = (state: BubbleState): void => {
  state.vitals.weight = BubbleConfig.vitals.weight.start
}
