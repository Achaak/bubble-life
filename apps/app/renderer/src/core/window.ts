import { actionsActions } from '@src/redux/reducers/actions'
import { bubbleActions } from '@src/redux/reducers/bubble'
import {
  addAnimationInList,
  addBodyInList,
  addClotheInList,
  addEnvironmentInList,
  addEyesInList,
  addHatInList,
  addOnomatopoeiaInList,
  resetAnimation,
} from '@src/redux/reducers/bubble/actions'
import {
  AnimationtListItem,
  BodyElementListItem,
  ClotheElementListItem,
  EnvironmentElementListItem,
  EyesElementListItem,
  HatElementListItem,
  OnomatopoeiaElementListItem,
} from '@src/redux/reducers/bubble/state'
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
    addHatInList: (HatElementListItem: HatElementListItem) => void
    resetHat: () => void

    /* ---------- CLOTHE ---------- */
    addClotheInList: (ClotheElementListItem: ClotheElementListItem) => void
    resetClothe: () => void

    /* ---------- BODY ---------- */
    addBodyInList: (BodyElementListItem: BodyElementListItem) => void
    resetBody: () => void

    /* ---------- ENVIRONMENT ---------- */
    addEnvironmentInList: (EnvironmentElementListItem: EnvironmentElementListItem) => void
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
    store.dispatch(bubbleActions.resetBubble())
    store.dispatch(actionsActions.resetActions())
  }

  /* -------------------- VITALS -------------------- */
  window.setWeight = (value) => store.dispatch(bubbleActions.setWeight(value))
  window.resetWeight = () => store.dispatch(bubbleActions.resetWeight())

  window.setSaturation = (value) => store.dispatch(bubbleActions.setSaturation(value))
  window.resetSaturation = () => store.dispatch(bubbleActions.resetSaturation())

  window.setHappiness = (value) => store.dispatch(bubbleActions.setHappiness(value))
  window.resetHappiness = () => store.dispatch(bubbleActions.resetHappiness())

  window.setTiredness = (value) => store.dispatch(bubbleActions.setTiredness(value))
  window.resetTiredness = () => store.dispatch(bubbleActions.resetTiredness())

  window.setHealth = (value) => store.dispatch(bubbleActions.setHealth(value))
  window.resetHealth = () => store.dispatch(bubbleActions.resetHealth())

  /* -------------------- ELEMENTS -------------------- */
  /* ---------- EYES ---------- */
  window.addEyesInList = (eyesElementListItem) => addEyesInList(eyesElementListItem)
  window.resetEyes = () => store.dispatch(bubbleActions.resetEyes())

  /* ---------- HAT ---------- */
  window.addHatInList = (HatElementListItem) => addHatInList(HatElementListItem)
  window.resetHat = () => store.dispatch(bubbleActions.resetHat())

  /* ---------- CLOTHE ---------- */
  window.addClotheInList = (ClotheElementListItem) => addClotheInList(ClotheElementListItem)
  window.resetClothe = () => store.dispatch(bubbleActions.resetClothe())

  /* ---------- BODY ---------- */
  window.addBodyInList = (BodyElementListItem) => addBodyInList(BodyElementListItem)
  window.resetBody = () => store.dispatch(bubbleActions.resetBody())

  /* ---------- ENVIRONMENT ---------- */
  window.addEnvironmentInList = (EnvironmentElementListItem) =>
    addEnvironmentInList(EnvironmentElementListItem)
  window.resetEnvironment = () => store.dispatch(bubbleActions.resetEnvironment())

  /* ---------- ONOMATOPOEIA ---------- */
  window.addOnomatopoeiaInList = (onomatopoeiaElementListItem) =>
    addOnomatopoeiaInList(onomatopoeiaElementListItem)
  window.resetOnomatopoeia = () => store.dispatch(bubbleActions.resetOnomatopoeia())

  /* -------------------- ANIMATIONS -------------------- */
  window.addAnimationInList = (animationListItem) => addAnimationInList(animationListItem)
  window.resetAnimation = () => resetAnimation()

  /* -------------------- STATS -------------------- */
  window.bubble = () => store.getState().bubble
  window.actions = () => store.getState().actions
}
