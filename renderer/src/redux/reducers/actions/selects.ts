import { RootState } from '@src/redux/store'
import { Action } from '@src/types/action'

export const selectActionWaitList = (state: RootState): Action[] => state.actions.waitList
export const selectActionCancelList = (state: RootState): Action[] => state.actions.cancelList
export const selectCurrentAction = (state: RootState): Action => state.actions.current
