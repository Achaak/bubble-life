import { BubbleConfig } from '@bubble/configs/bubble'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { BubbleState } from '../../types'

export const setTiredness = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.tiredness = 0
  } else if (action.payload > BubbleConfig.vitals.tiredness.max) {
    state.vitals.tiredness = BubbleConfig.vitals.tiredness.max
  } else {
    state.vitals.tiredness = action.payload
  }
}

export const addTiredness = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.tiredness + action.payload

  state.vitals.tiredness =
    newValue > BubbleConfig.vitals.tiredness.max ? BubbleConfig.vitals.tiredness.max : newValue
}

export const removeTiredness = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.tiredness - action.payload

  state.vitals.tiredness = newValue < 0 ? 0 : newValue
}

export const resetTiredness = (state: BubbleState): void => {
  state.vitals.tiredness = BubbleConfig.vitals.tiredness.default
}
