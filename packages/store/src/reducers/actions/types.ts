import type { Action } from '@bubble/types/src/action'

export interface ActionsState {
  waitList: Action[]
  cancelList: Action[]
  current: Action | null
}
