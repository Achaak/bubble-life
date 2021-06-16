import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Activity } from '@src/types/activity'
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
    addActivityInListReducer: (state, action: PayloadAction<{ activity: Activity }>) => {
      state.activityList = [
        ...state.activityList,
        {
          ...action.payload.activity,
          id: shortid(),
        },
      ]

      console.log('Add activity:', action.payload.activity.name)
    },
    removeActivityInListReducer: (state, action: PayloadAction<{ id: string }>) => {
      state.activityList = state.activityList.filter((item) => item.id !== action.payload.id)
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
    addCurrentActivity: (state, action: PayloadAction<{ activity: Activity }>) => {
      state.currentActivity = action.payload.activity
    },
    resetCurrentActivity: (state) => {
      state.currentActivity = null
    },
  },
})

export const {
  addActivityInListReducer,
  sortActivity,
  resetCurrentActivity,
  addCurrentActivity,
  removeActivityInListReducer,
} = activitiesSlice.actions

export const selectActivityList = (state: RootState) => state.activities.activityList
export const selectCurrentActivity = (state: RootState) => state.activities.currentActivity

export default activitiesSlice.reducer
