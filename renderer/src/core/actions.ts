export class Actions {
  lastRender: number
  name: string
  actions: {
    name: string
    function: () => void
  }[]

  constructor() {
    this.lastRender = 0
    this.name = 'actions'
    this.actions = []
  }

  update = (timestamp: number): void => {
    this.lastRender = timestamp
  }
}
