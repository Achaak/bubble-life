import { RootState } from '@src/redux/store'
import { Activity } from '@src/types/activity'

export const selectActivityList = (state: RootState): Activity[] => state.activities.activityList
export const selectCurrentActivity = (state: RootState): Activity =>
  state.activities.currentActivity
