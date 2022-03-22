import type { PayloadAction } from '@reduxjs/toolkit'
import type { ActionsState } from '../types'
import { initialActionsState } from '../state'

export * from './cancelList'
export * from './current'
export * from './awaitList'

export const resetActions = (state: ActionsState): void => {
  for (const key in state) {
    // @ts-expect-error Never
    delete state[key]
  }

  state.waitList = initialActionsState.waitList
  state.current = initialActionsState.current
  state.cancelList = initialActionsState.cancelList
}

export const updateMemoryValue = (
  state: ActionsState,
  action: PayloadAction<{ id: string; value: unknown; actionId: string }>
): void => {
  // Update current action memory value
  if (state.current) {
    if (!state.current.memory) {
      state.current.memory = {}
    }

    state.current.memory[action.payload.id] = action.payload.value
  }

  // Update wait list memory value
  state.waitList = state.waitList.map((item) => {
    if (item.id === action.payload.actionId) {
      if (!item.memory) {
        item.memory = {}
      }

      item.memory[action.payload.id] = action.payload.value
    }

    return item
  })

  // Update cancel list memory value
  state.cancelList = state.cancelList.map((item) => {
    if (item.id === action.payload.actionId) {
      if (!item.memory) {
        item.memory = {}
      }

      item.memory[action.payload.id] = action.payload.value
    }

    return item
  })
}

export const deleteMemoryValue = (
  state: ActionsState,
  action: PayloadAction<{ id: string; actionId: string }>
): void => {
  // Update current action memory value
  if (state.current) {
    if (!state.current.memory) {
      state.current.memory = {}
    }

    delete state.current.memory[action.payload.id]
  }

  // Update wait list memory value
  state.waitList = state.waitList.map((item) => {
    if (item.id === action.payload.actionId) {
      if (!item.memory) {
        item.memory = {}
      }

      delete item.memory[action.payload.id]
    }

    return item
  })

  // Update cancel list memory value
  state.cancelList = state.cancelList.map((item) => {
    if (item.id === action.payload.actionId) {
      if (!item.memory) {
        item.memory = {}
      }

      delete item.memory[action.payload.id]
    }

    return item
  })
}
