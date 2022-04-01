import { bubbleActions } from '..'
import { store } from '../../../store'
import type { BubbleState } from '../types'

export * from './elements'
export * from './vitals'
export * from './animations'
export * from './inventory'
export * from './message'

export const resetBubble = (): void => {
  store.dispatch(bubbleActions.resetBubble())
}

export const getBubble = (): BubbleState => store.getState().bubble
