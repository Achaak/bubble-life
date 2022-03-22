import type { Action } from '@bubble/types/src/action'
import { getActions } from '.'
import { actionsActions } from '..'
import { store } from '../../../store'

export const hasActionInAwaitList = ({ name }: { name: string }): boolean => {
  const { waitList } = getActions()

  return waitList.filter((item) => item.name === name).length > 0
}

export const addActionInAwaitList = (action: Action): void => {
  store.dispatch(actionsActions.addActionInAwaitList(action))
  store.dispatch(actionsActions.sortActionsInAwaitList())
}

export const removeActionInAwaitList = ({ id }: { id: string }): void => {
  store.dispatch(actionsActions.removeActionInAwaitList({ id }))
  store.dispatch(actionsActions.sortActionsInAwaitList())
}
