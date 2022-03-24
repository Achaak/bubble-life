import type { Action } from '@bubble/types'

export interface ActionsState {
  waitList: Action[]
  cancelList: Action[]
  current: Action | null
}
