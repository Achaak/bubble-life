import type { Action } from './../../action.js';

export interface ActionsState {
  waitingList: Action[];
  cancelList: Action[];
  current: Action | null;
}
