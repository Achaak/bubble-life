import type { Action } from '@bubble/types'
import { getActions } from '.'
import { actionsActions } from '..'
import { store } from '../../../store'
import { setCurrentAction } from './current'

export const hasActionInWaitingListByName = ({ name }: { name: string }): boolean => {
  const { waitingList } = getActions()

  return waitingList.filter((item) => item.name === name).length > 0
}

export const hasActionInWaitingListById = ({ id }: { id: string }): boolean => {
  const { waitingList } = getActions()

  return waitingList.filter((item) => item.id === id).length > 0
}

export const addActionInWaitingList = (action: Action): void => {
  store.dispatch(actionsActions.addActionInWaitingList(action))
  store.dispatch(actionsActions.sortActionsInWaitingList())
}

export const removeActionFromWaitingList = ({ id }: { id: string }): void => {
  store.dispatch(actionsActions.removeActionFromWaitingList({ id }))
  store.dispatch(actionsActions.sortActionsInWaitingList())
}

export const transferActionFromWaitingListToCurrent = ({ id }: { id: string }): void => {
  const { waitingList } = getActions()

  const action = waitingList.find((item) => item.id === id)

  if (!action) {
    return
  }

  removeActionFromWaitingList({ id })
  setCurrentAction(action)
}
