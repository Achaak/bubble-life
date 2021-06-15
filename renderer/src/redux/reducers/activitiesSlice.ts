import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Activity } from '@src/types/activity'
import dayjs from 'dayjs'
import shortid from 'shortid'
import { RootState } from '../store'

// Define a type for the slice state
interface ActivitiesState {
  activityList: Activity[]
  currentActivity: Activity | null
}

// Define the initial state using that type
const initialState: ActivitiesState = {
  activityList: [],
  currentActivity: null,
}

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    setActivity: (state, action: PayloadAction<{ activity: Activity }>) => {
      state.activityList = [
        ...state.activityList,
        {
          ...action.payload.activity,
          id: shortid(),
        },
      ]

      console.log('Add activity:', action.payload.activity.name)
      //sortActivity()
    },
    sortActivity: (state) => {
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
    },
    checkActivity: (state) => {
      const currentDate = dayjs().valueOf()

      // Verif current activity
      if (state.currentActivity) {
        if (state.currentActivity.start + state.currentActivity.duration < currentDate) {
          console.log('End activity:', state.currentActivity.name)

          // Start function
          state.currentActivity?.onEnd()

          // Remove current activity
          state.currentActivity = null
        }
      } else if (state.activityList.length > 0) {
        const newActivity = state.activityList[0]

        if (newActivity && newActivity.start <= currentDate) {
          // Add new current activity
          state.currentActivity = {
            ...newActivity,
            start: dayjs().valueOf(),
          }

          // Start function
          newActivity?.onStart()

          // Remove activity in list
          state.activityList = state.activityList.filter((item) => item.id !== newActivity.id)

          console.log('Start activity:', newActivity.name)
        }
      }
    },
  },
})

export const { setActivity, sortActivity, checkActivity } = activitiesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const hasActivityInList = (
  state: RootState,
  action: PayloadAction<{ name: string }>
): boolean =>
  state.activities.activityList.filter((item) => item.name === action.payload.name).length > 0

export const hasActivityInCurrent = (
  state: RootState,
  action: PayloadAction<{ name: string }>
): boolean => state.activities.currentActivity?.name === action.payload.name

export default activitiesSlice.reducer
