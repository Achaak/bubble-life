import type { Action } from '@bubble/types'
import { getActions } from '.'
import { actionsActions } from '..'
import { store } from '../../../store'

export type SetCurrentAction = Action
export const setCurrentAction = (action: SetCurrentAction): void => {
  store.dispatch(actionsActions.setCurrentAction(action))
}

export const resetCurrentAction = (): void => {
  store.dispatch(actionsActions.resetCurrentAction())
}

export type HasActionInCurrentByName = { name: string }
export const hasActionInCurrentByName = ({ name }: HasActionInCurrentByName): boolean => {
  const { current } = getActions()

  return current?.name === name
}

export type HasActionInCurrentById = { id: string }
export const hasActionInCurrentById = ({ id }: HasActionInCurrentById): boolean => {
  const { current } = getActions()

  return current?.id === id
}
