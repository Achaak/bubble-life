import type { ActionsState } from './types'

export const initialActionsState: ActionsState = {
  waitList: [],
  cancelList: [],
  current: null,
}
