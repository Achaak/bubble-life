import { actionsActions } from '..'
import { store } from '../../../store'
import type { ActionsState } from '../types'
import { hasActionInWaitingListById, hasActionInWaitingListByName } from './waitingList'
import { hasActionInCancelListById, hasActionInCancelListByName } from './cancelList'
import { hasActionInCurrentById, hasActionInCurrentByName } from './current'

export * from './cancelList'
export * from './current'
export * from './waitingList'

export const getActions = (): ActionsState => store.getState().actions

export const resetActions = (): void => {
  store.dispatch(actionsActions.resetActions())
}

export const hasActionByName = ({ name }: { name: string }): boolean => {
  return (
    hasActionInWaitingListByName({ name }) ||
    hasActionInCurrentByName({ name }) ||
    hasActionInCancelListByName({ name })
  )
}

export const hasActionById = ({ id }: { id: string }): boolean => {
  return (
    hasActionInWaitingListById({ id }) ||
    hasActionInCurrentById({ id }) ||
    hasActionInCancelListById({ id })
  )
}

export const updateMemoryValue = ({
  memoryId,
  actionId,
  value,
}: {
  memoryId: string
  actionId: string
  value: unknown
}): void => {
  store.dispatch(actionsActions.updateMemoryValue({ memoryId, actionId, value }))
}

export const deleteMemoryValue = ({
  memoryId,
  actionId,
}: {
  memoryId: string
  actionId: string
}): void => {
  store.dispatch(actionsActions.deleteMemoryValue({ memoryId, actionId }))
}
