import type {
  AddActionInWaitingList,
  HasActionInWaitingListById,
  HasActionInWaitingListByName,
  RemoveActionFromWaitingList,
  TransferActionFromWaitingListToCurrent,
} from '@bubble/types'
import { getActions } from './index'
import { actionsActions } from '../index'
import { store } from '../../../store'
import { setCurrentAction } from './current'

export const hasActionInWaitingListByName = ({ name }: HasActionInWaitingListByName): boolean => {
  const { waitingList } = getActions()

  return waitingList.filter((item) => item.name === name).length > 0
}

export const hasActionInWaitingListById = ({ id }: HasActionInWaitingListById): boolean => {
  const { waitingList } = getActions()

  return waitingList.filter((item) => item.id === id).length > 0
}

export const addActionInWaitingList = (action: AddActionInWaitingList): void => {
  store.dispatch(actionsActions.addActionInWaitingList(action))
  store.dispatch(actionsActions.sortActionsInWaitingList())
}

export const removeActionFromWaitingList = ({ id }: RemoveActionFromWaitingList): void => {
  store.dispatch(actionsActions.removeActionFromWaitingList({ id }))
  store.dispatch(actionsActions.sortActionsInWaitingList())
}

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
