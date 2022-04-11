import type { PayloadAction } from '@reduxjs/toolkit'
import { initialBubbleState } from '../state'
import type { BubbleState } from '@bubble/types'

export * from './vitals'
export * from './elements'
export * from './animations'
export * from './inventory'
export * from './message'

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
  state.message = initialBubbleState.message
}

export const setName = (state: BubbleState, action: PayloadAction<string>): void => {
  state.name = action.payload
}
