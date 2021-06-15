import { Activity } from '@src/types/activity'
import dayjs from 'dayjs'
import { Action } from 'overmind'
import shortid from 'shortid'

export const setActivity: Action<{ activity: Activity }> = ({ state, actions }, { activity }) => {
  const { sortActivity } = actions.activities

  state.activities.activityList = [
    ...state.activities.activityList,
    {
      ...activity,
      id: shortid(),
    },
  ]

  console.log('Add activity:', activity.name)

  sortActivity()
}

export const hasActivityInList: Action<{ name: string }, boolean> = ({ state }, { name }) => {
  return state.activities.activityList.filter((item) => item.name === name).length > 0
}

export const hasActivityInCurrent: Action<{ name: string }, boolean> = ({ state }, { name }) => {
  return state.activities.currentActivity?.name === name
}

export const sortActivity: Action<void> = ({ state }) => {
  state.activities.activityList = state.activities.activityList
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

export const checkActivity: Action<void> = ({ state }) => {
  const { activityList, currentActivity } = state.activities

  const currentDate = dayjs().valueOf()

  // Verif current activity
  if (currentActivity) {
    if (currentActivity.start + currentActivity.duration < currentDate) {
      console.log('End activity:', currentActivity.name)

      // Start function
      currentActivity?.onEnd()

      // Remove current activity
      state.activities.currentActivity = null
    }
  } else if (activityList.length > 0) {
    const newActivity = activityList[0]

    if (newActivity && newActivity.start <= currentDate) {
      // Add new current activity
      state.activities.currentActivity = {
        ...newActivity,
        start: dayjs().valueOf(),
      }

      // Start function
      newActivity?.onStart()

      // Remove activity in list
      state.activities.activityList = state.activities.activityList.filter(
        (item) => item.id !== newActivity.id
      )

      console.log('Start activity:', newActivity.name)
    }
  }
}