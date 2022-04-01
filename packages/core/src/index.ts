import { Actions } from './actionsClass'
import { Animations } from './animationsClass'
import { Message } from './message'
import { Vitals } from './vitalsClass'
import { initWindow } from './window'

export * from './actions'

export class BubbleCore {
  lastRender: number

  loopRunning: boolean

  actions: Actions

  animations: Animations

  message: Message

  vitals: Vitals

  constructor() {
    this.lastRender = 0
    this.loopRunning = false

    this.actions = new Actions()
    this.vitals = new Vitals()
    this.message = new Message()
    this.animations = new Animations()

    initWindow()

    this.startLoop()
  }

  update = async (timestamp: number): Promise<void> => {
    // ACTIONS
    this.actions.update(timestamp)

    // VITALS
    this.vitals.update(timestamp)

    // Message
    this.message.update()

    // ANIMATIONS
    this.animations.update()
  }

  loop = (timestamp?: number): void => {
    this.update(timestamp || 0)

    this.lastRender = timestamp || 0

    if (this.loopRunning) {
      requestAnimationFrame(this.loop.bind(this))
    }
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
}
