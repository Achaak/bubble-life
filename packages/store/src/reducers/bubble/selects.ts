import type { RootState } from '@bubble/store/src/store'
import type { AnimationtListItem, BubbleStateElements, BubbleStateVitals } from './state'

export const selectName = (state: RootState): string => state.bubble.name
export const selectVitals = (state: RootState): BubbleStateVitals => state.bubble.vitals
export const selectElements = (state: RootState): BubbleStateElements => state.bubble.elements
export const selectCurrentAnimation = (state: RootState): AnimationtListItem | null =>
  state.bubble.animation.current
