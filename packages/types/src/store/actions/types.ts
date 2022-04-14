import { Action } from "./../../action";

export interface ActionsState {
  waitingList: Action[]
  cancelList: Action[]
  current: Action | null
}
