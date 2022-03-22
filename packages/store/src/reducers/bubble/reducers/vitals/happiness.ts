import { BubbleConfig } from '@bubble/configs/bubble'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { BubbleState } from '../../types'

export const setHappiness = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.happiness = 0
  } else if (action.payload > BubbleConfig.vitals.happiness.max) {
    state.vitals.happiness = BubbleConfig.vitals.happiness.max
  } else {
    state.vitals.happiness = action.payload
  }
}

export const addHappiness = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.happiness + action.payload

  state.vitals.happiness =
    newValue > BubbleConfig.vitals.happiness.max ? BubbleConfig.vitals.happiness.max : newValue
}

export const removeHappiness = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.happiness - action.payload

  state.vitals.happiness = newValue < 0 ? 0 : newValue
}

export const resetHappiness = (state: BubbleState): void => {
  state.vitals.happiness = BubbleConfig.vitals.happiness.default
}
