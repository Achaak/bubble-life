import { Activity } from '@src/types/activity'

export interface ActivitiesState {
  activityList: Activity[]
  currentActivity: Activity | null
}

export const initialActivitiesState: ActivitiesState = {
  activityList: [],
  currentActivity: null,
}
