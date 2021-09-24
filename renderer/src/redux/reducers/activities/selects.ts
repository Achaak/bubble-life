import { RootState } from '@src/redux/store'
import { Action } from '@src/types/action'

export const selectActivityList = (state: RootState): Action[] => state.activities.activityList
export const selectCurrentActivity = (state: RootState): Action => state.activities.currentActivity
