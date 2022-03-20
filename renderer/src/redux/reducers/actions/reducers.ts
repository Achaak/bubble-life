import { ActionsState, initialActionsState } from './state'
import { PayloadAction } from '@reduxjs/toolkit'
import {
  Action,
  ActionAnimation,
  ActionElementBody,
  ActionElementClothe,
  ActionElementEnvironment,
  ActionElementEyes,
  ActionElementHat,
  ActionElementOnomatopoeia,
} from '@src/types/action'
import shortid from 'shortid'

export const resetActions = (state: ActionsState): void => {
  for (const key in state) {
    delete state[key]
  }

  state.waitList = initialActionsState.waitList
  state.current = initialActionsState.current
  state.cancelList = initialActionsState.cancelList
}

/* ---------- ACTIONS LIST ---------- */
export const addActionInAwaitList = (state: ActionsState, action: PayloadAction<Action>): void => {
  state.waitList = [
    ...state.waitList,
    {
      ...action.payload,
      id: shortid(),
    },
  ]

  console.log('Add action:', action.payload.name)
}
export const removeActionInAwaitList = (
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

/* ---------- CANCEL ACTION ---------- */
export const addActionInCancelList = (state: ActionsState, action: PayloadAction<Action>): void => {
  state.cancelList = [...state.cancelList, action.payload]
}
export const removeActionInCancelList = (
  state: ActionsState,
  action: PayloadAction<{ id: string }>
): void => {
  state.cancelList = state.cancelList.filter((item) => item.id !== action.payload.id)
}

/* ---------- CURRENT ACTION ---------- */
export const setCurrentAction = (state: ActionsState, action: PayloadAction<Action>): void => {
  state.current = action.payload
}
export const resetCurrentAction = (state: ActionsState): void => {
  state.current = null
}
export const updateCurrentActionElementEyes = (
  state: ActionsState,
  action: PayloadAction<ActionElementEyes>
): void => {
  state.current.elements.eyes = action.payload
}
export const updateCurrentActionElementClothe = (
  state: ActionsState,
  action: PayloadAction<ActionElementClothe>
): void => {
  state.current.elements.clothe = action.payload
}
export const updateCurrentActionElementEnvironment = (
  state: ActionsState,
  action: PayloadAction<ActionElementEnvironment>
): void => {
  state.current.elements.environment = action.payload
}
export const updateCurrentActionElementHat = (
  state: ActionsState,
  action: PayloadAction<ActionElementHat>
): void => {
  state.current.elements.hat = action.payload
}
export const updateCurrentActionElementBody = (
  state: ActionsState,
  action: PayloadAction<ActionElementBody>
): void => {
  state.current.elements.body = action.payload
}
export const updateCurrentActionElementOnomatopoeia = (
  state: ActionsState,
  action: PayloadAction<ActionElementOnomatopoeia>
): void => {
  state.current.elements.onomatopoeia = action.payload
}
export const updateCurrentActionAnimation = (
  state: ActionsState,
  action: PayloadAction<ActionAnimation>
): void => {
  state.current.animation = action.payload
}
