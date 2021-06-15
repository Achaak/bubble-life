import { increment } from '@src/redux/reducers/counterSlice'
import { store } from '@src/redux/store'
import { overmind } from '@src/store'
import { Actions } from './actions'
import { Activity_eat } from './activities/eat'
import { Activity_sleep } from './activities/sleep'

const Activities = [Activity_eat, Activity_sleep]

export class Core {
  lastRender: number
  loopRunning: boolean

  name: string
  activities: Array<Actions>

  constructor() {
    this.lastRender = 0
    this.loopRunning = false
    this.activities = []

    this.name = ''

    this.initActivities()
    this.startLoop()
  }

  update = (timestamp: number): void => {
    const { actions, state } = overmind
    const { checkActivity } = actions.activities
    const { activityList, currentActivity } = state.activities

    console.log('---', store.getState().counter.value)

    const tmp = store.dispatch(increment())

    // ACTIVITIES
    for (const activity of this.activities) {
      activity.update(timestamp)
    }

    if (activityList.length > 0 || !!currentActivity) checkActivity()
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

  initActivities = (): void => {
    for (const Activity of Activities) {
      this.activities.push(new Activity())
    }
  }
}
