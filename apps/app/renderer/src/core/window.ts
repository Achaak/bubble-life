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
import type {
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
  window.resetBubble = (): void => {
    store.dispatch(bubbleActions.resetBubble())
    store.dispatch(actionsActions.resetActions())
  }

  /* -------------------- VITALS -------------------- */
  window.setWeight = (value): void => {
    store.dispatch(bubbleActions.setWeight(value))
  }
  window.resetWeight = (): void => {
    store.dispatch(bubbleActions.resetWeight())
  }

  window.setSaturation = (value): void => {
    store.dispatch(bubbleActions.setSaturation(value))
  }
  window.resetSaturation = (): void => {
    store.dispatch(bubbleActions.resetSaturation())
  }

  window.setHappiness = (value): void => {
    store.dispatch(bubbleActions.setHappiness(value))
  }
  window.resetHappiness = (): void => {
    store.dispatch(bubbleActions.resetHappiness())
  }

  window.setTiredness = (value): void => {
    store.dispatch(bubbleActions.setTiredness(value))
  }
  window.resetTiredness = (): void => {
    store.dispatch(bubbleActions.resetTiredness())
  }

  window.setHealth = (value): void => {
    store.dispatch(bubbleActions.setHealth(value))
  }
  window.resetHealth = (): void => {
    store.dispatch(bubbleActions.resetHealth())
  }

  /* -------------------- ELEMENTS -------------------- */
  /* ---------- EYES ---------- */
  window.addEyesInList = (eyesElementListItem): void => {
    addEyesInList(eyesElementListItem)
  }
  window.resetEyes = (): void => {
    store.dispatch(bubbleActions.resetEyes())
  }

  /* ---------- HAT ---------- */
  window.addHatInList = (HatElementListItem): void => {
    addHatInList(HatElementListItem)
  }
  window.resetHat = (): void => {
    store.dispatch(bubbleActions.resetHat())
  }

  /* ---------- CLOTHE ---------- */
  window.addClotheInList = (ClotheElementListItem): void => {
    addClotheInList(ClotheElementListItem)
  }
  window.resetClothe = (): void => {
    store.dispatch(bubbleActions.resetClothe())
  }

  /* ---------- BODY ---------- */
  window.addBodyInList = (BodyElementListItem): void => {
    addBodyInList(BodyElementListItem)
  }
  window.resetBody = (): void => {
    store.dispatch(bubbleActions.resetBody())
  }

  /* ---------- ENVIRONMENT ---------- */
  window.addEnvironmentInList = (EnvironmentElementListItem): void => {
    addEnvironmentInList(EnvironmentElementListItem)
  }
  window.resetEnvironment = (): void => {
    store.dispatch(bubbleActions.resetEnvironment())
  }

  /* ---------- ONOMATOPOEIA ---------- */
  window.addOnomatopoeiaInList = (onomatopoeiaElementListItem): void => {
    addOnomatopoeiaInList(onomatopoeiaElementListItem)
  }
  window.resetOnomatopoeia = (): void => {
    store.dispatch(bubbleActions.resetOnomatopoeia())
  }

  /* -------------------- ANIMATIONS -------------------- */
  window.addAnimationInList = (animationListItem): void => {
    addAnimationInList(animationListItem)
  }
  window.resetAnimation = (): void => {
    resetAnimation()
  }

  /* -------------------- STATS -------------------- */
  window.bubble = (): void => {
    store.getState().bubble
  }
  window.actions = (): void => {
    store.getState().actions
  }
}
