import { overmind } from '@/store'
import { Actions } from './actions'
import { Activity_eat } from './activities/eat'

const Activities = [Activity_eat]

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
    for (const activity of this.activities) {
      activity.update(timestamp)
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

  initActivities = (): void => {
    for (const Activity of Activities) {
      this.activities.push(new Activity())
    }
  }

  setName = (name: string): void => {
    overmind.actions.bubble.setName({ name: name })
  }
}
