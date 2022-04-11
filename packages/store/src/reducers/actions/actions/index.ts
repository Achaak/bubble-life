import { actionsActions } from '..'
import { store } from '../../../store'
import { hasActionInWaitingListById, hasActionInWaitingListByName } from './waitingList'
import { hasActionInCancelListById, hasActionInCancelListByName } from './cancelList'
import { hasActionInCurrentById, hasActionInCurrentByName } from './current'
import type {
  DeleteMemoryValue,
  HasActionById,
  HasActionByName,
  UpdateMemoryValue,
  ActionsState,
} from '@bubble/types'

export * from './cancelList'
export * from './current'
export * from './waitingList'

export const getActions = (): ActionsState => store.getState().actions

export const resetActions = (): void => {
  store.dispatch(actionsActions.resetActions())
}

export const hasActionByName = ({ name }: HasActionByName): boolean => {
  return (
    hasActionInWaitingListByName({ name }) ||
    hasActionInCurrentByName({ name }) ||
    hasActionInCancelListByName({ name })
  )
}

export const hasActionById = ({ id }: HasActionById): boolean => {
  return (
    hasActionInWaitingListById({ id }) ||
    hasActionInCurrentById({ id }) ||
    hasActionInCancelListById({ id })
  )
}

export const updateMemoryValue = ({ memoryId, actionId, value }: UpdateMemoryValue): void => {
  store.dispatch(actionsActions.updateMemoryValue({ memoryId, actionId, value }))
}

export const deleteMemoryValue = ({ memoryId, actionId }: DeleteMemoryValue): void => {
  store.dispatch(actionsActions.deleteMemoryValue({ memoryId, actionId }))
}
