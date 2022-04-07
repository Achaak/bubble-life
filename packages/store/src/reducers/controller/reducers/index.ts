import type { User } from '@bubble/types'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialControllerState } from '../state'
import type { ControllerState } from '../types'

export const resetController = (state: ControllerState): void => {
  for (const key in state) {
    // @ts-expect-error Never
    delete state[key]
  }

  state = initialControllerState
}

export const setCurrentUser = (state: ControllerState, action: PayloadAction<User>): void => {
  state.currentUser = action.payload
}