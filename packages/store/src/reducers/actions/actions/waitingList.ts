import type { Action } from '@bubble/types'
import { getActions } from '.'
import { actionsActions } from '..'
import { store } from '../../../store'
import { setCurrentAction } from './current'

export type HasActionInWaitingListByName = { name: string }
export const hasActionInWaitingListByName = ({ name }: HasActionInWaitingListByName): boolean => {
  const { waitingList } = getActions()

  return waitingList.filter((item) => item.name === name).length > 0
}

export type HasActionInWaitingListById = { id: string }
export const hasActionInWaitingListById = ({ id }: HasActionInWaitingListById): boolean => {
  const { waitingList } = getActions()

  return waitingList.filter((item) => item.id === id).length > 0
}

export type AddActionInWaitingList = Action
export const addActionInWaitingList = (action: AddActionInWaitingList): void => {
  store.dispatch(actionsActions.addActionInWaitingList(action))
  store.dispatch(actionsActions.sortActionsInWaitingList())
}

export type RemoveActionFromWaitingList = { id: string }
export const removeActionFromWaitingList = ({ id }: RemoveActionFromWaitingList): void => {
  store.dispatch(actionsActions.removeActionFromWaitingList({ id }))
  store.dispatch(actionsActions.sortActionsInWaitingList())
}

export type TransferActionFromWaitingListToCurrent = { id: string }
export const transferActionFromWaitingListToCurrent = ({
  id,
}: TransferActionFromWaitingListToCurrent): void => {
  const { waitingList } = getActions()

  const action = waitingList.find((item) => item.id === id)

  if (!action) {
    return
  }

  removeActionFromWaitingList({ id })
  setCurrentAction(action)
}
