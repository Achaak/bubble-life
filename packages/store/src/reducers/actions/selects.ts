import type { Action } from '@bubble/types'
import type { RootState } from '../../store'

export const selectActionWaitingList = (state: RootState): Action[] => state.actions.waitingList
export const selectActionCancelList = (state: RootState): Action[] => state.actions.cancelList
export const selectCurrentAction = (state: RootState): Action | null => state.actions.current
