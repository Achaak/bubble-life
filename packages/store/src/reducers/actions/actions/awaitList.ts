import type { Action } from '@bubble/types'
import { getActions } from '.'
import { actionsActions } from '..'
import { store } from '../../../store'
import { setCurrentAction } from './current'

export const hasActionInAwaitListByName = ({ name }: { name: string }): boolean => {
  const { waitList } = getActions()

  return waitList.filter((item) => item.name === name).length > 0
}

export const hasActionInAwaitListById = ({ id }: { id: string }): boolean => {
  const { waitList } = getActions()

  return waitList.filter((item) => item.id === id).length > 0
}

export const addActionInAwaitList = (action: Action): void => {
  store.dispatch(actionsActions.addActionInAwaitList(action))
  store.dispatch(actionsActions.sortActionsInAwaitList())
}

export const removeActionFromAwaitList = ({ id }: { id: string }): void => {
  store.dispatch(actionsActions.removeActionFromAwaitList({ id }))
  store.dispatch(actionsActions.sortActionsInAwaitList())
}

export const transferActionFromAwaitListToCurrent = ({ id }: { id: string }): void => {
  const { cancelList } = getActions()

  const action = cancelList.find((item) => item.id === id)

  if (!action) {
    return
  }

  removeActionFromAwaitList({ id })
  setCurrentAction(action)
}
