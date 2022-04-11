import type { Action } from '@/src/action'

export interface ActionsState {
  waitingList: Action[]
  cancelList: Action[]
  current: Action | null
}
