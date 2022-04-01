import type { Action } from '@bubble/types'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ActionsState } from '../types'

export const addActionInCancelList = (state: ActionsState, action: PayloadAction<Action>): void => {
  state.cancelList = [...state.cancelList, action.payload]
}
export const removeActionFromCancelList = (
  state: ActionsState,
  action: PayloadAction<{ id: string }>
): void => {
  state.cancelList = state.cancelList.filter((item) => item.id !== action.payload.id)
}