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

  /* -------------------- VITALS -------------------- */
  /* ---------- WEIGHT ---------- */
  setWeightReducer: setWeightAction,
  addWeightReducer: addWeightAction,
  removeWeightReducer: removeWeightAction,
  resetWeightReducer: resetWeightAction,

  /* ---------- SATURATION ---------- */
  setSaturationReducer: setSaturationAction,
  addSaturationReducer: addSaturationAction,
  removeSaturationReducer: removeSaturationAction,
  resetSaturationReducer: resetSaturationAction,

  /* ---------- HAPPINESS ---------- */
  setHappinessReducer: setHappinessAction,
  addHappinessReducer: addHappinessAction,
  removeHappinessReducer: removeHappinessAction,
  resetHappinessReducer: resetHappinessAction,

  /* ---------- TIREDNESS ---------- */
  setTirednessReducer: setTirednessAction,
  addTirednessReducer: addTirednessAction,
  removeTirednessReducer: removeTirednessAction,
  resetTirednessReducer: resetTirednessAction,

  /* ---------- HEALTH ---------- */
  setHealthReducer: setHealthAction,
  addHealthReducer: addHealthAction,
  removeHealthReducer: removeHealthAction,
  resetHealthReducer: resetHealthAction,

  /* -------------------- ELEMENTS -------------------- */
  /* ---------- EYES ---------- */
  addEyesInListReducer: addEyesInListAction,
  removeEyesInListReducer: removeEyesInListAction,
  sortEyesInListReducer: sortEyesInListAction,
  resetEyesReducer: resetEyesAction,
  setCurrentEyesReducer: setCurrentEyesAction,
  resetCurrentEyesReducer: resetCurrentEyesAction,
  transferEyesInListToCurrentReducer: transferEyesInListToCurrentAction,

  /* ---------- ENVIRONMENT ---------- */
  addEnvironmentInListReducer: addEnvironmentInListAction,
  removeEnvironmentInListReducer: removeEnvironmentInListAction,
  sortEnvironmentsInListReducer: sortEnvironmentsInListAction,
  resetEnvironmentReducer: resetEnvironmentAction,
  setCurrentEnvironmentReducer: setCurrentEnvironmentAction,
  resetCurrentEnvironmentReducer: resetCurrentEnvironmentAction,
  transferEnvironmentInListToCurrentReducer: transferEnvironmentInListToCurrentAction,

  /* ---------- CLOTHE ---------- */
  addClotheInListReducer: addClotheInListAction,
  removeClotheInListReducer: removeClotheInListAction,
  sortClothesInListReducer: sortClothesInListAction,
  resetClotheReducer: resetClotheAction,
  setCurrentClotheReducer: setCurrentClotheAction,
  resetCurrentClotheReducer: resetCurrentClotheAction,
  transferClotheInListToCurrentReducer: transferClotheInListToCurrentAction,

  /* ---------- HAT ---------- */
  addHatInListReducer: addHatInListAction,
  removeHatInListReducer: removeHatInListAction,
  sortHatsInListReducer: sortHatsInListAction,
  resetHatReducer: resetHatAction,
  setCurrentHatReducer: setCurrentHatAction,
  resetCurrentHatReducer: resetCurrentHatAction,
  transferHatInListToCurrentReducer: transferHatInListToCurrentAction,

  /* ---------- BODY ---------- */
  addBodyInListReducer: addBodyInListAction,
  removeBodyInListReducer: removeBodyInListAction,
  sortBodiesInListReducer: sortBodiesInListAction,
  resetBodyReducer: resetBodyAction,
  setCurrentBodyReducer: setCurrentBodyAction,
  resetCurrentBodyReducer: resetCurrentBodyAction,
  transferBodyInListToCurrentReducer: transferBodyInListToCurrentAction,

  /* ---------- ONOMATOPOEIA ---------- */
  addOnomatopoeiaInListReducer: addOnomatopoeiaInListAction,
  removeOnomatopoeiaInListReducer: removeOnomatopoeiaInListAction,
  sortOnomatopoeiasInListReducer: sortOnomatopoeiasInListAction,
  resetOnomatopoeiaReducer: resetOnomatopoeiaAction,
  setCurrentOnomatopoeiaReducer: setCurrentOnomatopoeiaAction,
  resetCurrentOnomatopoeiaReducer: resetCurrentOnomatopoeiaAction,
  transferOnomatopoeiaInListToCurrentReducer: transferOnomatopoeiaInListToCurrentAction,

  /* -------------------- ANIMATIONS -------------------- */
  addAnimationInListReducer: addAnimationInListAction,
  removeAnimationInListReducer: removeAnimationInListAction,
  sortAnimationsInListReducer: sortAnimationsInListAction,
  resetAnimationReducer: resetAnimationAction,
  setCurrentAnimationReducer: setCurrentAnimationAction,
  resetCurrentAnimationReducer: resetCurrentAnimationAction,
  transferAnimationInListToCurrentReducer: transferAnimationInListToCurrentAction,
} = bubbleSlice.actions

export default bubbleSlice.reducer
