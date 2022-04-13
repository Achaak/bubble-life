import type { BubbleState } from '@bubble/types'
import { bubbleActions } from '../index.js'
import { store } from '../../../store.js'

export * from './elements/index.js'
export * from './vitals/index.js'
export * from './animations.js'
export * from './inventory.js'
export * from './message/index.js'

export const resetBubble = (): void => {
  store.dispatch(bubbleActions.resetBubble())
}

export const getBubble = (): BubbleState => store.getState().bubble
