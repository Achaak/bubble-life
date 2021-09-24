export class Vital {
  lastRender: number
  name: string

  constructor() {
    this.lastRender = 0
    this.name = 'actions'
  }

  update = (timestamp: number): void => {
    this.lastRender = timestamp
  }
}
