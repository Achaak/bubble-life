import type {
  Action,
  ActionAnimation,
  ActionElementBody,
  ActionElementClothe,
  ActionElementEnvironment,
  ActionElementEyes,
  ActionElementHat,
  ActionElementOnomatopoeia,
} from '@bubble/types/src/action'
import type { PayloadAction } from '@reduxjs/toolkit'
import shortid from 'shortid'
import type { ActionsState } from './state'
import { initialActionsState } from './state'

export const resetActions = (state: ActionsState): void => {
  for (const key in state) {
    // @ts-expect-error Never
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
  if (!state.current?.elements) {
    return
  }
  state.current.elements.eyes = action.payload
}
export const updateCurrentActionElementClothe = (
  state: ActionsState,
  action: PayloadAction<ActionElementClothe>
): void => {
  if (!state.current?.elements) {
    return
  }
  state.current.elements.clothe = action.payload
}
export const updateCurrentActionElementEnvironment = (
  state: ActionsState,
  action: PayloadAction<ActionElementEnvironment>
): void => {
  if (!state.current?.elements) {
    return
  }
  state.current.elements.environment = action.payload
}
export const updateCurrentActionElementHat = (
  state: ActionsState,
  action: PayloadAction<ActionElementHat>
): void => {
  if (!state.current?.elements) {
    return
  }
  state.current.elements.hat = action.payload
}
export const updateCurrentActionElementBody = (
  state: ActionsState,
  action: PayloadAction<ActionElementBody>
): void => {
  if (!state.current?.elements) {
    return
  }
  state.current.elements.body = action.payload
}
export const updateCurrentActionElementOnomatopoeia = (
  state: ActionsState,
  action: PayloadAction<ActionElementOnomatopoeia>
): void => {
  if (!state.current?.elements) {
    return
  }
  state.current.elements.onomatopoeia = action.payload
}
export const updateCurrentActionAnimation = (
  state: ActionsState,
  action: PayloadAction<ActionAnimation>
): void => {
  if (!state.current?.elements) {
    return
  }
  state.current.animation = action.payload
}
