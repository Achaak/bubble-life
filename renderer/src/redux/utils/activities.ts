import { store } from '../store'

export const hasActivityInList = ({ name }: { name: string }): boolean => {
  const activityList = store.getState().activities.activityList

  return activityList.filter((item) => item.name === name).length > 0
}

export const hasActivityInCurrent = ({ name }: { name: string }): boolean => {
  const currentActivity = store.getState().activities.currentActivity

  return currentActivity?.name === name
}
