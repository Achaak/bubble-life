import { BubbleConfig } from '@bubble/configs/bubble'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { BubbleState } from '../../types'

export const setHealth = (state: BubbleState, action: PayloadAction<number>): void => {
  if (action.payload < 0) {
    state.vitals.health = 0
  } else if (action.payload > BubbleConfig.vitals.health.max) {
    state.vitals.health = BubbleConfig.vitals.health.max
  } else {
    state.vitals.health = action.payload
  }
}

export const addHealth = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.health + action.payload

  state.vitals.health =
    newValue > BubbleConfig.vitals.health.max ? BubbleConfig.vitals.health.max : newValue
}

export const removeHealth = (state: BubbleState, action: PayloadAction<number>): void => {
  const newValue = state.vitals.health - action.payload

  state.vitals.health = newValue < 0 ? 0 : newValue
}

export const resetHealth = (state: BubbleState): void => {
  state.vitals.health = BubbleConfig.vitals.health.default
}
