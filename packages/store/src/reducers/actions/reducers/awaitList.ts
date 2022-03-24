import type { Action } from '@bubble/types'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ActionsState } from '../types'
import shortid from 'shortid'

export const addActionInAwaitList = (state: ActionsState, action: PayloadAction<Action>): void => {
  state.waitList = [
    ...state.waitList,
    {
      ...action.payload,
      id: shortid(),
    },
  ]
}

export const removeActionFromAwaitList = (
  state: ActionsState,
  action: PayloadAction<{ id: string }>
): void => {
  state.waitList = state.waitList.filter((item) => item.id !== action.payload.id)
}

export const sortActionsInAwaitList = (state: ActionsState): void => {
  state.waitList = state.waitList
    .sort((a, b) => {
      if (a.start < b.start) {
        return -1
      }
      if (a.start > b.start) {
        return 1
      }
      return 0
    })
    .sort((a, b) => {
      if (a.importance < b.importance) {
        return -1
      }
      if (a.importance > b.importance) {
        return 1
      }
      return 0
    })
}
