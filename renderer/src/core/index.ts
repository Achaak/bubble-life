import { addCurrentActivity, resetCurrentActivity } from '@src/redux/reducers/activitiesSlice'
import { store } from '@src/redux/store'
import { removeActivityInList } from '@src/redux/utils/activities'
import dayjs from 'dayjs'
import { Actions } from './actions'
import { Activity_eat } from './activities/eat'
import { Activity_sleep } from './activities/sleep'

const ActionsList = [Activity_eat, Activity_sleep]

export class BubbleCore {
  lastRender: number
  loopRunning: boolean

  name: string
  actions: {
    name: string
    class: Actions
  }[]

  constructor() {
    this.lastRender = 0
    this.loopRunning = false

    this.actions = []

    this.initActionsList()
    this.startLoop()
  }

  initActionsList = (): void => {
    for (const _Actions of ActionsList) {
      const _actions = new _Actions()

      this.actions.push({
        name: _actions.name,
        class: _actions,
      })
    }
  }

  update = async (timestamp: number): Promise<void> => {
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

  loop = (timestamp?: number): void => {
    this.update(timestamp || 0)

    this.lastRender = timestamp || 0

    if (this.loopRunning) requestAnimationFrame(this.loop.bind(this))
  }

  // Start the loop
  startLoop = (): void => {
    this.loopRunning = true
    this.loop()
  }

  // Stop the loop
  stopLoop = (): void => {
    this.loopRunning = false
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
        store.dispatch(resetCurrentActivity())
      }
    } else if (activityList.length > 0) {
      const newActivity = activityList[0]

      if (newActivity && newActivity.start <= currentDate) {
        // Add new current activity
        store.dispatch(
          addCurrentActivity({
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
