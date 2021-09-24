import { ActivitiesState, initialActivitiesState } from './state'
import { PayloadAction } from '@reduxjs/toolkit'
import { Activity } from '@src/types/activity'
import shortid from 'shortid'

export const resetActivitiesReducer = (state: ActivitiesState): void => {
  state.activityList = initialActivitiesState.activityList
  state.currentActivity = initialActivitiesState.currentActivity
}

export const addActivityInListReducer = (
  state: ActivitiesState,
  action: PayloadAction<{ activity: Activity }>
): void => {
  state.activityList = [
    ...state.activityList,
    {
      ...action.payload.activity,
      id: shortid(),
    },
  ]

  console.log('Add activity:', action.payload.activity.name)
}

export const removeActivityInListReducer = (
  state: ActivitiesState,
  action: PayloadAction<{ id: string }>
): void => {
  state.activityList = state.activityList.filter((item) => item.id !== action.payload.id)
}

export const sortActivityReducer = (state: ActivitiesState): void => {
  state.activityList = state.activityList
    .sort((a, b) => {
      if (a.start < b.start) {
        return -1
      }
      if (a.start > b.start) {
        return 1
      }
      return 0
    })
    .sort((a, b) => {
      if (a.importance < b.importance) {
        return -1
      }
      if (a.importance > b.importance) {
        return 1
      }
      return 0
    })
}

export const addCurrentActivityReducer = (
  state: ActivitiesState,
  action: PayloadAction<{ activity: Activity }>
): void => {
  state.currentActivity = action.payload.activity
}

export const resetCurrentActivityReducer = (state: ActivitiesState): void => {
  state.currentActivity = null
}
