import type { ActionsState } from './types'

export const initialActionsState: ActionsState = {
  waitingList: [],
  cancelList: [],
  current: null,
}
