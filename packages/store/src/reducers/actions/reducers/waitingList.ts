import type { Action } from '@bubble/types'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ActionsState } from '../types'
import shortid from 'shortid'

export const addActionInWaitingList = (
  state: ActionsState,
  action: PayloadAction<Action>
): void => {
  state.waitingList = [
    ...state.waitingList,
    {
      ...action.payload,
      id: shortid(),
    },
  ]
}

export const removeActionFromWaitingList = (
  state: ActionsState,
  action: PayloadAction<{ id: string }>
): void => {
  state.waitingList = state.waitingList.filter((item) => item.id !== action.payload.id)
}

export const sortActionsInWaitingList = (state: ActionsState): void => {
  state.waitingList = state.waitingList
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
