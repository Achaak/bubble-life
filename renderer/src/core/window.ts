import { resetActionsAction } from '@src/redux/reducers/actions'
import {
  resetBodyAction,
  resetBubbleAction,
  resetClotheAction,
  resetEnvironmentAction,
  resetEyesAction,
  resetHappinessAction,
  resetHatAction,
  resetHealthAction,
  resetOnomatopoeiaAction,
  resetSaturationAction,
  resetTirednessAction,
  resetWeightAction,
  setHappinessAction,
  setHealthAction,
  setSaturationAction,
  setTirednessAction,
  setWeightAction,
} from '@src/redux/reducers/bubble'
import {
  AnimationtListItem,
  BodiesElementListItem,
  ClothesElementListItem,
  EnvironmentsElementListItem,
  EyesElementListItem,
  HatsElementListItem,
  OnomatopoeiaElementListItem,
} from '@src/redux/reducers/bubble/state'
import {
  addAnimationInList,
  addBodyInList,
  addClotheInList,
  addEnvironmentInList,
  addEyesInList,
  addHatInList,
  addOnomatopoeiaInList,
  resetAnimation,
} from '@src/redux/reducers/bubble/utils'
import { store } from '@src/redux/store'

declare global {
  interface Window {
    resetBubble: () => void

    /* -------------------- VITALS -------------------- */
    setWeight: (value: number) => void
    resetWeight: () => void

    setSaturation: (value: number) => void
    resetSaturation: () => void

    setHappiness: (value: number) => void
    resetHappiness: () => void

    setTiredness: (value: number) => void
    resetTiredness: () => void

    setHealth: (value: number) => void
    resetHealth: () => void

    /* -------------------- ELEMENTS -------------------- */
    /* ---------- EYES ---------- */
    addEyesInList: (eyesElementListItem: EyesElementListItem) => void
    resetEyes: () => void

    /* ---------- HAT ---------- */
    addHatInList: (hatsElementListItem: HatsElementListItem) => void
    resetHat: () => void

    /* ---------- CLOTHE ---------- */
    addClotheInList: (clothesElementListItem: ClothesElementListItem) => void
    resetClothe: () => void

    /* ---------- BODY ---------- */
    addBodyInList: (bodiesElementListItem: BodiesElementListItem) => void
    resetBody: () => void

    /* ---------- ENVIRONMENT ---------- */
    addEnvironmentInList: (environmentsElementListItem: EnvironmentsElementListItem) => void
    resetEnvironment: () => void

    /* ---------- ONOMATOPOEIA ---------- */
    addOnomatopoeiaInList: (onomatopoeiaElementListItem: OnomatopoeiaElementListItem) => void
    resetOnomatopoeia: () => void

    /* -------------------- ANIMATIONS -------------------- */
    addAnimationInList: (animationtListItem: AnimationtListItem) => void
    resetAnimation: () => void

    /* -------------------- STATS -------------------- */
    bubble: () => void
    actions: () => void
  }
}

export const initWindow = (): void => {
  window.resetBubble = () => {
    store.dispatch(resetBubbleAction())
    store.dispatch(resetActionsAction())
  }

  /* -------------------- VITALS -------------------- */
  window.setWeight = (value) => store.dispatch(setWeightAction(value))
  window.resetWeight = () => store.dispatch(resetWeightAction())

  window.setSaturation = (value) => store.dispatch(setSaturationAction(value))
  window.resetSaturation = () => store.dispatch(resetSaturationAction())

  window.setHappiness = (value) => store.dispatch(setHappinessAction(value))
  window.resetHappiness = () => store.dispatch(resetHappinessAction())

  window.setTiredness = (value) => store.dispatch(setTirednessAction(value))
  window.resetTiredness = () => store.dispatch(resetTirednessAction())

  window.setHealth = (value) => store.dispatch(setHealthAction(value))
  window.resetHealth = () => store.dispatch(resetHealthAction())

  /* -------------------- ELEMENTS -------------------- */
  /* ---------- EYES ---------- */
  window.addEyesInList = (eyesElementListItem) => addEyesInList(eyesElementListItem)
  window.resetEyes = () => store.dispatch(resetEyesAction())

  /* ---------- HAT ---------- */
  window.addHatInList = (hatsElementListItem) => addHatInList(hatsElementListItem)
  window.resetHat = () => store.dispatch(resetHatAction())

  /* ---------- CLOTHE ---------- */
  window.addClotheInList = (clothesElementListItem) => addClotheInList(clothesElementListItem)
  window.resetClothe = () => store.dispatch(resetClotheAction())

  /* ---------- BODY ---------- */
  window.addBodyInList = (bodiesElementListItem) => addBodyInList(bodiesElementListItem)
  window.resetBody = () => store.dispatch(resetBodyAction())

  /* ---------- ENVIRONMENT ---------- */
  window.addEnvironmentInList = (environmentsElementListItem) =>
    addEnvironmentInList(environmentsElementListItem)
  window.resetEnvironment = () => store.dispatch(resetEnvironmentAction())

  /* ---------- ONOMATOPOEIA ---------- */
  window.addOnomatopoeiaInList = (onomatopoeiaElementListItem) =>
    addOnomatopoeiaInList(onomatopoeiaElementListItem)
  window.resetOnomatopoeia = () => store.dispatch(resetOnomatopoeiaAction())

  /* -------------------- ANIMATIONS -------------------- */
  window.addAnimationInList = (animationListItem) => addAnimationInList(animationListItem)
  window.resetAnimation = () => resetAnimation()

  /* -------------------- STATS -------------------- */
  window.bubble = () => store.getState().bubble
  window.actions = () => store.getState().actions
}
