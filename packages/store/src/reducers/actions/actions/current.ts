import type { Action } from '@bubble/types/src/action'
import { getActions } from '.'
import { actionsActions } from '..'
import { store } from '../../../store'

export const setCurrentAction = (action: Action): void => {
  store.dispatch(actionsActions.setCurrentAction(action))
}

export const resetCurrentAction = (): void => {
  store.dispatch(actionsActions.resetCurrentAction())
}

export const hasActionInCurrent = ({ name }: { name: string }): boolean => {
  const { current } = getActions()

  return current?.name === name
}
