import type { RootState } from '@bubble/store/src/store'
import type { Action } from '@bubble/types/src/action'

export const selectActionWaitList = (state: RootState): Action[] => state.actions.waitList
export const selectActionCancelList = (state: RootState): Action[] => state.actions.cancelList
export const selectCurrentAction = (state: RootState): Action | null => state.actions.current
