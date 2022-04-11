import type { Action, ActionsState } from '@bubble/types'
import type { PayloadAction } from '@reduxjs/toolkit'

export const addActionInCancelList = (state: ActionsState, action: PayloadAction<Action>): void => {
  state.cancelList = [...state.cancelList, action.payload]
}
export const removeActionFromCancelList = (
  state: ActionsState,
  action: PayloadAction<{ id: string }>
): void => {
  state.cancelList = state.cancelList.filter((item) => item.id !== action.payload.id)
}
