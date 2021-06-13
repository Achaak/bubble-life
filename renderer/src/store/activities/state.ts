import { Activity } from '@src/types/activity'

export type State = {
  activityList: Activity[]
  currentActivity: Activity | null
}

export const state: State = {
  activityList: [],
  currentActivity: null,
}
