import type { Action } from '@bubble/types/src/action'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ActionsState } from '../types'

export const setCurrentAction = (state: ActionsState, action: PayloadAction<Action>): void => {
  state.current = action.payload
}

export const resetCurrentAction = (state: ActionsState): void => {
  state.current = null
}
