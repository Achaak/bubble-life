import { addActionInListAction, removeActionInListAction, sortActionAction } from '.'
import { store } from '@src/redux/store'
import { Action } from '@src/types/action'

export const hasActionInList = ({ name }: { name: string }): boolean => {
  const list = store.getState().actions.list

  return list.filter((item) => item.name === name).length > 0
}

export const hasActionInCurrent = ({ name }: { name: string }): boolean => {
  const current = store.getState().actions.current

  return current?.name === name
}

export const addActionInList = ({ action }: { action: Action }): void => {
  store.dispatch(addActionInListAction({ action }))
  store.dispatch(sortActionAction())
}

export const removeActionInList = ({ id }: { id: string }): void => {
  store.dispatch(removeActionInListAction({ id }))
  store.dispatch(sortActionAction())
}
