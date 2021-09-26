import { RootState } from '@src/redux/store'
import { Action } from '@src/types/action'

export const selectActionList = (state: RootState): Action[] => state.actions.actionList
export const selectCurrentAction = (state: RootState): Action => state.actions.currentAction
