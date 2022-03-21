import type { Action } from '@bubble/types/src/action'
import type { RootState } from '@src/redux/store'

export const selectActionWaitList = (state: RootState): Action[] => state.actions.waitList
export const selectActionCancelList = (state: RootState): Action[] => state.actions.cancelList
export const selectCurrentAction = (state: RootState): Action | null => state.actions.current
