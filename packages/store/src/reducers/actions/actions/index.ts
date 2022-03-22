import { actionsActions } from '..'
import { store } from '../../../store'
import type { ActionsState } from '../types'
import { hasActionInAwaitList } from './awaitList'
import { hasActionInCurrent } from './current'

export * from './cancelList'
export * from './current'
export * from './awaitList'

export const getActions = (): ActionsState => store.getState().actions

export const resetActions = (): void => {
  store.dispatch(actionsActions.resetActions())
}

export const hasAction = ({ name }: { name: string }): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return hasActionInAwaitList({ name }) || hasActionInCurrent({ name })
}

export const updateMemoryValue = ({
  id,
  actionId,
  value,
}: {
  id: string
  actionId: string
  value: unknown
}): void => {
  store.dispatch(actionsActions.updateMemoryValue({ id, actionId, value }))
}

export const deleteMemoryValue = ({ id, actionId }: { id: string; actionId: string }): void => {
  store.dispatch(actionsActions.deleteMemoryValue({ id, actionId }))
}
