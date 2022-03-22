import {
  addAnimationInList,
  addBodyInList,
  addClotheInList,
  addEnvironmentInList,
  addEyesInList,
  addHatInList,
  addOnomatopoeiaInList,
  getActions,
  getBubble,
  resetActions,
  resetAnimation,
  resetBody,
  resetBubble,
  resetClothe,
  resetEnvironment,
  resetEyes,
  resetHappiness,
  resetHat,
  resetHealth,
  resetOnomatopoeia,
  resetSaturation,
  resetTiredness,
  resetWeight,
  setHappiness,
  setHealth,
  setSaturation,
  setTiredness,
  setWeight,
} from '@bubble/store'
import type {
  AnimationtListItem,
  BodyElementListItem,
  ClotheElementListItem,
  EnvironmentElementListItem,
  EyesElementListItem,
  HatElementListItem,
  OnomatopoeiaElementListItem,
  ActionsState,
  BubbleState,
} from '@bubble/store'

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
    resetBubble()
    resetActions()
  }

  /* -------------------- VITALS -------------------- */
  window.setWeight = (value): void => {
    setWeight(value)
  }
  window.resetWeight = (): void => {
    resetWeight()
  }

  window.setSaturation = (value): void => {
    setSaturation(value)
  }
  window.resetSaturation = (): void => {
    resetSaturation()
  }

  window.setHappiness = (value): void => {
    setHappiness(value)
  }
  window.resetHappiness = (): void => {
    resetHappiness()
  }

  window.setTiredness = (value): void => {
    setTiredness(value)
  }
  window.resetTiredness = (): void => {
    resetTiredness()
  }

  window.setHealth = (value): void => {
    setHealth(value)
  }
  window.resetHealth = (): void => {
    resetHealth()
  }

  /* -------------------- ELEMENTS -------------------- */
  /* ---------- EYES ---------- */
  window.addEyesInList = (eyesElementListItem): void => {
    addEyesInList(eyesElementListItem)
  }
  window.resetEyes = (): void => {
    resetEyes()
  }

  /* ---------- HAT ---------- */
  window.addHatInList = (HatElementListItem): void => {
    addHatInList(HatElementListItem)
  }
  window.resetHat = (): void => {
    resetHat()
  }

  /* ---------- CLOTHE ---------- */
  window.addClotheInList = (ClotheElementListItem): void => {
    addClotheInList(ClotheElementListItem)
  }
  window.resetClothe = (): void => {
    resetClothe()
  }

  /* ---------- BODY ---------- */
  window.addBodyInList = (BodyElementListItem): void => {
    addBodyInList(BodyElementListItem)
  }
  window.resetBody = (): void => {
    resetBody()
  }

  /* ---------- ENVIRONMENT ---------- */
  window.addEnvironmentInList = (EnvironmentElementListItem): void => {
    addEnvironmentInList(EnvironmentElementListItem)
  }
  window.resetEnvironment = (): void => {
    resetEnvironment()
  }

  /* ---------- ONOMATOPOEIA ---------- */
  window.addOnomatopoeiaInList = (onomatopoeiaElementListItem): void => {
    addOnomatopoeiaInList(onomatopoeiaElementListItem)
  }
  window.resetOnomatopoeia = (): void => {
    resetOnomatopoeia()
  }

  /* -------------------- ANIMATIONS -------------------- */
  window.addAnimationInList = (animationListItem): void => {
    addAnimationInList(animationListItem)
  }
  window.resetAnimation = (): void => {
    resetAnimation()
  }

  /* -------------------- STATS -------------------- */
  window.bubble = (): BubbleState => getBubble()
  window.actions = (): ActionsState => getActions()
}
