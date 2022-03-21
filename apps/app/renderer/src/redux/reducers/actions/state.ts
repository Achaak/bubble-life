import { Action } from '@src/types/action'

export interface ActionsState {
  waitList: Action[]
  cancelList: Action[]
  current: Action | null
}

export const initialActionsState: ActionsState = {
  waitList: [],
  cancelList: [],
  current: null,
}
