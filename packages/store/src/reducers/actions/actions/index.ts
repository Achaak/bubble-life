import { actionsActions } from '../index.js'
import { store } from '../../../store.js'
import { hasActionInWaitingListById, hasActionInWaitingListByName } from './waitingList.js'
import { hasActionInCancelListById, hasActionInCancelListByName } from './cancelList.js'
import { hasActionInCurrentById, hasActionInCurrentByName } from './current.js'
import type {
  DeleteMemoryValue,
  HasActionById,
  HasActionByName,
  UpdateMemoryValue,
  ActionsState,
} from '@bubble/types'

export * from './cancelList.js'
export * from './current.js'
export * from './waitingList.js'

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
