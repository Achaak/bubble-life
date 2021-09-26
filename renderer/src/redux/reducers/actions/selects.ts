import { RootState } from '@src/redux/store'
import { Action } from '@src/types/action'

export const selectlist = (state: RootState): Action[] => state.actions.list
export const selectcurrent = (state: RootState): Action => state.actions.current
