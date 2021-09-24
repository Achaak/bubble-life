import { Action } from '@src/types/action'

export interface ActivitiesState {
  activityList: Action[]
  currentActivity: Action | null
}

export const initialActivitiesState: ActivitiesState = {
  activityList: [],
  currentActivity: null,
}
