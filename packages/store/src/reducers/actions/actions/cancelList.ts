import type { Action } from '@bubble/types'
import { getActions } from '.'
import { actionsActions } from '..'
import { store } from '../../../store'
import { setCurrentAction } from './current'

export type HasActionInCancelListByName = { name: string }
export const hasActionInCancelListByName = ({ name }: HasActionInCancelListByName): boolean => {
  const { cancelList } = getActions()

  return cancelList.filter((item) => item.name === name).length > 0
}

export type HasActionInCancelListById = { id: string }
export const hasActionInCancelListById = ({ id }: HasActionInCancelListById): boolean => {
  const { cancelList } = getActions()

  return cancelList.filter((item) => item.id === id).length > 0
}

export type AddActionInCancelList = { action: Action }
export const addActionInCancelList = ({ action }: AddActionInCancelList): void => {
  store.dispatch(actionsActions.addActionInCancelList(action))
}

export type RemoveActionFromCancelList = { id: string }
export const removeActionFromCancelList = ({ id }: RemoveActionFromCancelList): void => {
  store.dispatch(actionsActions.removeActionFromCancelList({ id }))
}

export type TransferActionFromCancelListToCurrent = { id: string }
export const transferActionFromCancelListToCurrent = ({
  id,
}: TransferActionFromCancelListToCurrent): void => {
  const { cancelList } = getActions()

  const action = cancelList.find((item) => item.id === id)

  if (!action) {
    return
  }

  removeActionFromCancelList({ id })
  setCurrentAction(action)
}
