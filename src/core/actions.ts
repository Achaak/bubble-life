export class Actions {
  lastRender: number

  constructor() {
    this.lastRender = 0
  }

  update = (timestamp: number): void => {
    this.lastRender = timestamp
  }
}
