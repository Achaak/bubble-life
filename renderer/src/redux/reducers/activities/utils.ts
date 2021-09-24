import { addActivityInListAction, removeActivityInListAction, sortActivityAction } from '.'
import { store } from '@src/redux/store'
import { Action } from '@src/types/action'

export const hasActivityInList = ({ name }: { name: string }): boolean => {
  const activityList = store.getState().activities.activityList

  return activityList.filter((item) => item.name === name).length > 0
}

export const hasActivityInCurrent = ({ name }: { name: string }): boolean => {
  const currentActivity = store.getState().activities.currentActivity

  return currentActivity?.name === name
}

export const addActivityInList = ({ activity }: { activity: Action }): void => {
  store.dispatch(addActivityInListAction({ activity }))
  store.dispatch(sortActivityAction())
}

export const removeActivityInList = ({ id }: { id: string }): void => {
  store.dispatch(removeActivityInListAction({ id }))
  store.dispatch(sortActivityAction())
}
