import type { Action } from '@bubble/types/src/action'
import { getActions } from '.'
import { actionsActions } from '..'
import { store } from '../../../store'

export const hasActionInCancelList = ({ name }: { name: string }): boolean => {
  const { cancelList } = getActions()

  return cancelList.filter((item) => item.name === name).length > 0
}

export const addActionInCancelList = ({ id }: { id: string }): void => {
  const { cancelList, current, waitList } = getActions()

  let action: Action | null | undefined = undefined

  if (cancelList.some((item) => item.id === id)) {
    return
  }

  // Verify in current action
  if (current?.id === id) {
    action = current
  } else {
    // Verify in await list action
    action = waitList.find((item) => item.id === id)
  }

  if (!action) {
    return
  }

  store.dispatch(actionsActions.addActionInCancelList(action))
}

export const removeActionInCancelList = ({ id }: { id: string }): void => {
  store.dispatch(actionsActions.removeActionInCancelList({ id }))
}
