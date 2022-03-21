import { RootState } from '@src/redux/store'

import { BubbleStateElements, BubbleStateVitals } from './state'

export const selectName = (state: RootState): string => state.bubble.name
export const selectVitals = (state: RootState): BubbleStateVitals => state.bubble.vitals
export const selectElements = (state: RootState): BubbleStateElements => state.bubble.elements
