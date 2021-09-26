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
  addBodyInListReducer: addBodyInListAction,
  addClotheInListReducer: addClotheInListAction,
  addEnvironmentInListReducer: addEnvironmentInListAction,
  addEyesInListReducer: addEyesInListAction,
  addOnomatopoeiaInListReducer: addOnomatopoeiaInListAction,
  addHatInListReducer: addHatInListAction,
  resetBodyReducer: resetBodyAction,
  resetClotheReducer: resetClotheAction,
  resetEnvironmentReducer: resetEnvironmentAction,
  resetEyesReducer: resetEyesAction,
  resetHatReducer: resetHatAction,
  resetOnomatopoeiaReducer: resetOnomatopoeiaAction,

  // Animations
  addAnimationInListReducer: addAnimationInListAction,
  removeAnimationInListReducer: removeAnimationInListAction,
  sortAnimationReducer: sortAnimationAction,
  resetAnimationReducer: resetAnimationAction,
} = bubbleSlice.actions

export default bubbleSlice.reducer
