import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../state'
import type { BubbleState } from '../types'

export * from './vitals'
export * from './elements'
export * from './animations'
export * from './inventory'

export const resetBubble = (state: BubbleState): void => {
  for (const key in state) {
    // @ts-expect-error Never
    delete state[key]
  }

  state.vitals = initialBubbleState.vitals
  state.elements = initialBubbleState.elements
  state.name = initialBubbleState.name
  state.animation = initialBubbleState.animation
  state.inventory = initialBubbleState.inventory
}

export const setName = (state: BubbleState, action: PayloadAction<string>): void => {
  state.name = action.payload
}
