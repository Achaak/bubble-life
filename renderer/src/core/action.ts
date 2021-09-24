import { Action as ActionType } from '@src/types/action'

export class Action {
  lastRender: number
  name: string
  actions: {
    name: string
    function: (action: ActionType) => void
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
