import { Activity } from '@/types/activity'
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

  sortActivity()
}

export const hasActivity: Action<{ name: string }, Activity[]> = ({ state }, { name }) => {
  return state.activities.activityList.filter((item) => item.name === name)
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

      // Remove current activity
      state.activities.currentActivity = null
    }
  } else if (activityList.length > 0) {
    const newActivity = activityList.shift()

    if (newActivity && newActivity.start >= currentDate) {
      // Add new current activity
      state.activities.currentActivity = {
        ...newActivity,
        start: dayjs().valueOf(),
      }

      // Remove activity in list
      state.activities.activityList = state.activities.activityList.filter(
        (item) => item.id !== newActivity.id
      )
      console.log('Start activity:', newActivity.name)
    }
  }
}
