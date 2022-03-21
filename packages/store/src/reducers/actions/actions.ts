import type { Action } from '@bubble/types/src/action'
import { actionsActions } from '.'
import { store } from '../../store'

export const resetActions = (): void => {
  store.dispatch(actionsActions.resetActions())
}

export const hasAction = ({ name }: { name: string }): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return hasActionInAwaitList({ name }) || hasActionInCurrent({ name })
}

/* ---------- ACTIONS LIST ---------- */
export const hasActionInAwaitList = ({ name }: { name: string }): boolean => {
  const list = store.getState().actions.waitList

  return list.filter((item) => item.name === name).length > 0
}
export const addActionInAwaitList = (action: Action): void => {
  store.dispatch(actionsActions.addActionInAwaitList(action))
  store.dispatch(actionsActions.sortActionsInAwaitList())
}
export const removeActionInAwaitList = ({ id }: { id: string }): void => {
  store.dispatch(actionsActions.removeActionInAwaitList({ id }))
  store.dispatch(actionsActions.sortActionsInAwaitList())
}

/* ---------- CANCEL ACTION ---------- */
export const addActionInCancelList = ({ id }: { id: string }): void => {
  let action: Action | null | undefined = undefined

  //console.log(store.getState().actions.cancelList.some((item) => item.id === id))
  if (store.getState().actions.cancelList.some((item) => item.id === id)) {
    return
  }

  // Verify in current action
  if (store.getState().actions.current?.id === id) {
    action = store.getState().actions.current
  } else {
    // Verify in await list action
    action = store.getState().actions.waitList.find((item) => item.id === id)
  }

  if (!action) {
    return
  }

  store.dispatch(actionsActions.addActionInCancelList(action))
}
export const removeActionInCancelList = ({ id }: { id: string }): void => {
  store.dispatch(actionsActions.removeActionInCancelList({ id }))
  removeActionInAwaitList({ id })
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  resetCurrentAction()
}

/* ---------- CURRENT ACTION ---------- */
export const resetCurrentAction = (): void => {
  store.dispatch(actionsActions.resetCurrentAction())
}
export const hasActionInCurrent = ({ name }: { name: string }): boolean => {
  const current = store.getState().actions.current

  return current?.name === name
}
