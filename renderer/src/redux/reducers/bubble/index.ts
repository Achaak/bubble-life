import * as reducers from './reducers'
import { initialBubbleState } from './state'
import { createSlice } from '@reduxjs/toolkit'

export * from './selects'

const bubbleSlice = createSlice({
  name: 'bubble',
  initialState: initialBubbleState,
  reducers: reducers,
})

export const {
  resetBubbleReducer: resetBubbleAction,

  setNameReducer: setNameAction,

  // Vitals
  setWeightReducer: setWeightAction,
  addWeightReducer: addWeightAction,
  removeWeightReducer: removeWeightAction,
  resetWeightReducer: resetWeightAction,
  setSaturationReducer: setSaturationAction,
  addSaturationReducer: addSaturationAction,
  removeSaturationReducer: removeSaturationAction,
  resetSaturationReducer: resetSaturationAction,
  setHappinessReducer: setHappinessAction,
  addHappinessReducer: addHappinessAction,
  removeHappinessReducer: removeHappinessAction,
  resetHappinessReducer: resetHappinessAction,
  setTirednessReducer: setTirednessAction,
  addTirednessReducer: addTirednessAction,
  removeTirednessReducer: removeTirednessAction,
  resetTirednessReducer: resetTirednessAction,
  setHealthReducer: setHealthAction,
  addHealthReducer: addHealthAction,
  removeHealthReducer: removeHealthAction,
  resetHealthReducer: resetHealthAction,

  // Elements
  setBodyReducer: setBodyAction,
  setClotheReducer: setClotheAction,
  setEnvironmentReducer: setEnvironmentAction,
  setEyesReducer: setEyesAction,
  setHatReducer: setHatAction,
  resetBodyReducer: resetBodyAction,
  resetClotheReducer: resetClotheAction,
  resetEnvironmentReducer: resetEnvironmentAction,
  resetEyesReducer: resetEyesAction,
  resetHatReducer: resetHatAction,
  resetOnomatopoeiaReducer: resetOnomatopoeiaAction,
  setOnomatopoeiaReducer: setOnomatopoeiaAction,

  // Animations
  addAnimationInListReducer: addAnimationInListAction,
  removeAnimationInListReducer: removeAnimationInListAction,
  sortAnimationReducer: sortAnimationAction,
} = bubbleSlice.actions

export default bubbleSlice.reducer
