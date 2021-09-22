import {
  addActivityInListReducer,
  removeActivityInListReducer,
  sortActivity,
} from '../reducers/activitiesSlice'
import { store } from '../store'
import { Activity } from '@src/types/activity'

export const hasActivityInList = ({ name }: { name: string }): boolean => {
  const activityList = store.getState().activities.activityList

  return activityList.filter((item) => item.name === name).length > 0
}

export const hasActivityInCurrent = ({ name }: { name: string }): boolean => {
  const currentActivity = store.getState().activities.currentActivity

  return currentActivity?.name === name
}

export const addActivityInList = ({ activity }: { activity: Activity }): void => {
  store.dispatch(addActivityInListReducer({ activity }))
  store.dispatch(sortActivity())
}

export const removeActivityInList = ({ id }: { id: string }): void => {
  store.dispatch(removeActivityInListReducer({ id }))
  store.dispatch(sortActivity())
}
