import { ActionsState, initialActionsState } from './state'
import { PayloadAction } from '@reduxjs/toolkit'
import { Action } from '@src/types/action'
import shortid from 'shortid'

export const resetActionsReducer = (state: ActionsState): void => {
  state.actionList = initialActionsState.actionList
  state.currentAction = initialActionsState.currentAction
}

export const addActionInListReducer = (
  state: ActionsState,
  action: PayloadAction<{ action: Action }>
): void => {
  state.actionList = [
    ...state.actionList,
    {
      ...action.payload.action,
      id: shortid(),
    },
  ]

  console.log('Add action:', action.payload.action.name)
}

export const removeActionInListReducer = (
  state: ActionsState,
  action: PayloadAction<{ id: string }>
): void => {
  state.actionList = state.actionList.filter((item) => item.id !== action.payload.id)
}

export const sortActionReducer = (state: ActionsState): void => {
  state.actionList = state.actionList
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

export const addCurrentActionReducer = (
  state: ActionsState,
  action: PayloadAction<{ action: Action }>
): void => {
  state.currentAction = action.payload.action
}

export const resetCurrentActionReducer = (state: ActionsState): void => {
  state.currentAction = null
}
