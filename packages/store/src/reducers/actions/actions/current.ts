import type { Action } from '@bubble/types'
import { getActions } from '.'
import { actionsActions } from '..'
import { store } from '../../../store'

export const setCurrentAction = (action: Action): void => {
  store.dispatch(actionsActions.setCurrentAction(action))
}

export const resetCurrentAction = (): void => {
  store.dispatch(actionsActions.resetCurrentAction())
}

export const hasActionInCurrentByName = ({ name }: { name: string }): boolean => {
  const { current } = getActions()

  return current?.name === name
}

export const hasActionInCurrentById = ({ id }: { id: string }): boolean => {
  const { current } = getActions()

  return current?.id === id
}
