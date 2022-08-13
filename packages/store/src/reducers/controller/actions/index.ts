import type { SetCurrentUser, ControllerState } from '@bubble/types'
import { controllerActions } from '../index.js'
import { store } from '../../../store.js'

export const resetController = (): void => {
  store.dispatch(controllerActions.resetController())
}

export const getController = (): ControllerState => store.getState().controller

export const setCurrentUser = (currentUser: SetCurrentUser): void => {
  store.dispatch(controllerActions.setCurrentUser(currentUser))
}
