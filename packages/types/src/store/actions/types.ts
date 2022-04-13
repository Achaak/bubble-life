import type { Action } from '@/src/action.js'

export interface ActionsState {
  waitingList: Action[]
  cancelList: Action[]
  current: Action | null
}
