import type { User } from '@bubble/types'
import { controllerActions } from '..'
import { store } from '../../../store'
import type { ControllerState } from '../types'

export const resetController = (): void => {
  store.dispatch(controllerActions.resetController())
}

export const getController = (): ControllerState => store.getState().controller

export const setCurrentUser = (currentUser: User): void => {
  store.dispatch(controllerActions.setCurrentUser(currentUser))
}
