import { addActionInListAction, removeActionInListAction, sortActionAction } from '.'
import { store } from '@src/redux/store'
import { Action } from '@src/types/action'

export const hasActionInList = ({ name }: { name: string }): boolean => {
  const actionList = store.getState().actions.actionList

  return actionList.filter((item) => item.name === name).length > 0
}

export const hasActionInCurrent = ({ name }: { name: string }): boolean => {
  const currentAction = store.getState().actions.currentAction

  return currentAction?.name === name
}

export const addActionInList = ({ action }: { action: Action }): void => {
  store.dispatch(addActionInListAction({ action }))
  store.dispatch(sortActionAction())
}

export const removeActionInList = ({ id }: { id: string }): void => {
  store.dispatch(removeActionInListAction({ id }))
  store.dispatch(sortActionAction())
}
