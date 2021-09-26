import { Action } from '@src/types/action'

export interface ActionsState {
  list: Action[]
  current: Action | null
}

export const initialActionsState: ActionsState = {
  list: [],
  current: null,
}
