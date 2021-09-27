import {
  addActionInAwaitListAction,
  addActionInCancelListAction,
  removeActionInAwaitListAction,
  removeActionInCancelListAction,
  resetCurrentActionAction,
  sortActionsInAwaitListAction,
} from '.'
import { store } from '@src/redux/store'
import { Action } from '@src/types/action'

export const hasAction = ({ name }: { name: string }): boolean => {
  return hasActionInAwaitList({ name }) || hasActionInCurrent({ name })
}

/* ---------- ACTIONS LIST ---------- */
export const hasActionInAwaitList = ({ name }: { name: string }): boolean => {
  const list = store.getState().actions.waitList

  return list.filter((item) => item.name === name).length > 0
}
export const addActionInAwaitList = (action: Action): void => {
  store.dispatch(addActionInAwaitListAction(action))
  store.dispatch(sortActionsInAwaitListAction())
}
export const removeActionInAwaitList = ({ id }: { id: string }): void => {
  store.dispatch(removeActionInAwaitListAction({ id }))
  store.dispatch(sortActionsInAwaitListAction())
}

/* ---------- CANCEL ACTION ---------- */
export const addActionInCancelList = ({ id }: { id: string }): void => {
  let action: Action

  //console.log(store.getState().actions.cancelList.some((item) => item.id === id))
  if (store.getState().actions.cancelList.some((item) => item.id === id)) return

  // Verify in current action
  if (store.getState().actions.current.id === id) {
    action = store.getState().actions.current
  } else {
    // Verify in await list action
    action = store.getState().actions.waitList.find((item) => item.id === id)
  }

  if (!action) return

  store.dispatch(addActionInCancelListAction(action))
}
export const removeActionInCancelList = ({ id }: { id: string }): void => {
  store.dispatch(removeActionInCancelListAction({ id }))
  removeActionInAwaitList({ id })
  resetCurrentAction()
}

/* ---------- CURRENT ACTION ---------- */
export const resetCurrentAction = (): void => {
  store.dispatch(resetCurrentActionAction())
}
export const hasActionInCurrent = ({ name }: { name: string }): boolean => {
  const current = store.getState().actions.current

  return current?.name === name
}
