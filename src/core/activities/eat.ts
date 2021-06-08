import { Actions } from '../actions'

export class Activity_eat extends Actions {
  lastEat: number

  constructor() {
    super()
    this.lastEat = 0
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastEat > Math.random() * (500 - 100) + 100) {
      console.log('eat')
      this.lastEat = timestamp
    }
  }
}
