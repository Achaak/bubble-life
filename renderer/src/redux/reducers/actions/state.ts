import { Action } from '@src/types/action'

export interface ActionsState {
  actionList: Action[]
  currentAction: Action | null
}

export const initialActionsState: ActionsState = {
  actionList: [],
  currentAction: null,
}
