import type { Action as ActionType } from '@bubble/types/src/action'

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
