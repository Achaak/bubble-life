import type {
  AddActionInCancelList,
  HasActionInCancelListById,
  HasActionInCancelListByName,
  RemoveActionFromCancelList,
  TransferActionFromCancelListToCurrent,
} from '@bubble/types'
import { getActions } from './index.js'
import { actionsActions } from '../index.js'
import { store } from '../../../store.js'
import { setCurrentAction } from './current.js'

export const hasActionInCancelListByName = ({ name }: HasActionInCancelListByName): boolean => {
  const { cancelList } = getActions()

  return cancelList.filter((item) => item.name === name).length > 0
}

export const hasActionInCancelListById = ({ id }: HasActionInCancelListById): boolean => {
  const { cancelList } = getActions()

  return cancelList.filter((item) => item.id === id).length > 0
}

export const addActionInCancelList = ({ action }: AddActionInCancelList): void => {
  store.dispatch(actionsActions.addActionInCancelList(action))
}

export const removeActionFromCancelList = ({ id }: RemoveActionFromCancelList): void => {
  store.dispatch(actionsActions.removeActionFromCancelList({ id }))
}

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
