import { Action } from './action'
import { ActivitiesList } from './activities'
import {
  addCurrentActivityAction,
  resetCurrentActivityAction,
} from '@src/redux/reducers/activities'
import { removeActivityInList } from '@src/redux/reducers/activities/utils'
import { store } from '@src/redux/store'
import dayjs from 'dayjs'

const ActionsList = [...ActivitiesList]

export class Actions {
  actions: {
    name: string
    class: Action
  }[]

  constructor() {
    this.actions = []

    this.initActionsList()
  }

  initActionsList = (): void => {
    for (const _Action of ActionsList) {
      const _action = new _Action()

      this.actions.push({
        name: _action.name,
        class: _action,
      })
    }
  }

  update = (timestamp: number): void => {
    const { activityList, currentActivity } = store.getState().activities

    // ACTIONS
    for (const action of this.actions) {
      action.class.update(timestamp)
    }

    // ACTIVITIES
    if (activityList.length > 0 || !!currentActivity) {
      this.checkActivity()
    }
  }

  triggerActionFunction = ({
    actionName,
    functionName,
  }: {
    actionName: string
    functionName: string
  }): void => {
    const _action = this.actions.find((item) => item.name === actionName)

    if (!_action) return

    const _function = _action.class.actions.find((item) => item.name === functionName)

    if (!_function) return

    _function.function()
  }

  checkActivity = (): void => {
    const currentDate = dayjs().valueOf()

    const { currentActivity, activityList } = store.getState().activities

    // Verif current activity
    if (currentActivity) {
      if (currentActivity.start + currentActivity.duration < currentDate) {
        console.log('[End activity]', currentActivity.name)

        // Start function
        this.triggerActionFunction({
          actionName: currentActivity.name,
          functionName: currentActivity.EndFunction,
        })

        // Remove current activity
        store.dispatch(resetCurrentActivityAction())
      }
    } else if (activityList.length > 0) {
      const newActivity = activityList[0]

      if (newActivity && newActivity.start <= currentDate) {
        // Add new current activity
        store.dispatch(
          addCurrentActivityAction({
            activity: {
              ...newActivity,
              start: dayjs().valueOf(),
            },
          })
        )

        // Start function
        this.triggerActionFunction({
          actionName: newActivity.name,
          functionName: newActivity.startFunction,
        })

        removeActivityInList({
          id: newActivity.id,
        })

        console.log('[Start activity]', newActivity.name)
      }
    }
  }
}
