import type { Action } from '@bubble/types/src/action'
import { getActions } from '.'
import { actionsActions } from '..'
import { store } from '../../../store'
import { setCurrentAction } from './current'

export const hasActionInCancelListByName = ({ name }: { name: string }): boolean => {
  const { cancelList } = getActions()

  return cancelList.filter((item) => item.name === name).length > 0
}

export const hasActionInCancelListById = ({ id }: { id: string }): boolean => {
  const { cancelList } = getActions()

  return cancelList.filter((item) => item.id === id).length > 0
}

export const addActionInCancelList = ({ action }: { action: Action }): void => {
  store.dispatch(actionsActions.addActionInCancelList(action))
}

export const removeActionFromCancelList = ({ id }: { id: string }): void => {
  store.dispatch(actionsActions.removeActionFromCancelList({ id }))
}

export const transferActionFromCancelListToCurrent = ({ id }: { id: string }): void => {
  const { cancelList } = getActions()

  const action = cancelList.find((item) => item.id === id)

  if (!action) {
    return
  }

  removeActionFromCancelList({ id })
  setCurrentAction(action)
}
