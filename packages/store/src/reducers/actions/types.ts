import type { Action } from '@bubble/types'

export interface ActionsState {
  waitingList: Action[]
  cancelList: Action[]
  current: Action | null
}
