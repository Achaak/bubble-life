import { ActionsState, initialActionsState } from './state'
import { PayloadAction } from '@reduxjs/toolkit'
import { Action } from '@src/types/action'
import shortid from 'shortid'

export const resetActionsReducer = (state: ActionsState): void => {
  for (const key in state) {
    delete state[key]
  }

  state.list = initialActionsState.list
  state.current = initialActionsState.current
}

export const addActionInListReducer = (
  state: ActionsState,
  action: PayloadAction<{ action: Action }>
): void => {
  state.list = [
    ...state.list,
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
  state.list = state.list.filter((item) => item.id !== action.payload.id)
}

export const sortActionReducer = (state: ActionsState): void => {
  state.list = state.list
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

export const addcurrentReducer = (
  state: ActionsState,
  action: PayloadAction<{ action: Action }>
): void => {
  state.current = action.payload.action
}

export const resetcurrentReducer = (state: ActionsState): void => {
  state.current = null
}
