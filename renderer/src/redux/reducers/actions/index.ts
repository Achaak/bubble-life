import * as reducers from './reducers'
import { initialActionsState } from './state'
import { createSlice } from '@reduxjs/toolkit'

export * from './selects'

const actionsSlice = createSlice({
  name: 'actions',
  initialState: initialActionsState,
  reducers: reducers,
})

export const {
  resetActionsReducer: resetActionsAction,

  /* ---------- ACTIONS LIST ---------- */
  addActionInAwaitListReducer: addActionInAwaitListAction,
  sortActionsInAwaitListReducer: sortActionsInAwaitListAction,
  removeActionInAwaitListReducer: removeActionInAwaitListAction,

  /* ---------- CANCEL ACTION ---------- */
  addActionInCancelListReducer: addActionInCancelListAction,
  removeActionInCancelListReducer: removeActionInCancelListAction,

  /* ---------- CURRENT ACTION ---------- */
  resetCurrentActionReducer: resetCurrentActionAction,
  setCurrentActionReducer: setCurrentActionAction,
  updateCurrentActionElementEyesReducer: updateCurrentActionElementEyesAction,
  updateCurrentActionElementClotheReducer: updateCurrentActionElementClotheAction,
  updateCurrentActionElementEnvironmentReducer: updateCurrentActionElementEnvironmentAction,
  updateCurrentActionElementHatReducer: updateCurrentActionElementHatAction,
  updateCurrentActionElementBodyReducer: updateCurrentActionElementBodyAction,
  updateCurrentActionElementOnomatopoeiaReducer: updateCurrentActionElementOnomatopoeiaAction,
  updateCurrentActionAnimationReducer: updateCurrentActionAnimationAction,
} = actionsSlice.actions

export default actionsSlice.reducer
