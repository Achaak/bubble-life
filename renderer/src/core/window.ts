import { resetActivitiesAction } from '@src/redux/reducers/activities'
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
  setBodyAction,
  setClotheAction,
  setEnvironmentAction,
  setEyesAction,
  setHappinessAction,
  setHatAction,
  setHealthAction,
  setOnomatopoeiaAction,
  setSaturationAction,
  setTirednessAction,
  setWeightAction,
} from '@src/redux/reducers/bubble'
import { addAnimationInList } from '@src/redux/reducers/bubble/utils'
import { store } from '@src/redux/store'
import { Animation } from '@src/types/animation'
import { Bodies, Clothes, Environments, Eyes, Hats, Onomatopoeia } from '@src/types/bubble'

declare global {
  interface Window {
    resetBubble: () => void

    /* ----- VITALS ----- */
    setWeight: ({ value }: { value: number }) => void
    resetWeight: () => void

    setSaturation: ({ value }: { value: number }) => void
    resetSaturation: () => void

    setHappiness: ({ value }: { value: number }) => void
    resetHappiness: () => void

    setTiredness: ({ value }: { value: number }) => void
    resetTiredness: () => void

    setHealth: ({ value }: { value: number }) => void
    resetHealth: () => void

    /* ----- ELEMENTS ----- */
    setEyes: ({ value }: { value: Eyes }) => void
    resetEyes: () => void

    setHat: ({ value }: { value: Hats }) => void
    resetHat: () => void

    setClothe: ({ value }: { value: Clothes }) => void
    resetClothe: () => void

    setBody: ({ value }: { value: Bodies }) => void
    resetBody: () => void

    setEnvironment: ({ value }: { value: Environments }) => void
    resetEnvironment: () => void

    setOnomatopoeia: ({ value }: { value: Onomatopoeia }) => void
    resetOnomatopoeia: () => void

    /* ----- ANIMATION ----- */
    addAnimationInList: ({ animation }: { animation: Animation }) => void

    /* ----- STATS ----- */
    bubble: () => void
    activities: () => void
  }
}

export const initWindow = (): void => {
  window.resetBubble = () => {
    store.dispatch(resetBubbleAction())
    store.dispatch(resetActivitiesAction())
  }

  window.setWeight = ({ value }) => store.dispatch(setWeightAction({ value }))
  window.resetWeight = () => store.dispatch(resetWeightAction())

  window.setSaturation = ({ value }) => store.dispatch(setSaturationAction({ value }))
  window.resetSaturation = () => store.dispatch(resetSaturationAction())

  window.setHappiness = ({ value }) => store.dispatch(setHappinessAction({ value }))
  window.resetHappiness = () => store.dispatch(resetHappinessAction())

  window.setTiredness = ({ value }) => store.dispatch(setTirednessAction({ value }))
  window.resetTiredness = () => store.dispatch(resetTirednessAction())

  window.setHealth = ({ value }) => store.dispatch(setHealthAction({ value }))
  window.resetHealth = () => store.dispatch(resetHealthAction())

  window.setEyes = ({ value }) => store.dispatch(setEyesAction({ value }))
  window.resetEyes = () => store.dispatch(resetEyesAction())

  window.setHat = ({ value }) => store.dispatch(setHatAction({ value }))
  window.resetHat = () => store.dispatch(resetHatAction())

  window.setClothe = ({ value }) => store.dispatch(setClotheAction({ value }))
  window.resetClothe = () => store.dispatch(resetClotheAction())

  window.setBody = ({ value }) => store.dispatch(setBodyAction({ value }))
  window.resetBody = () => store.dispatch(resetBodyAction())

  window.setEnvironment = ({ value }) => store.dispatch(setEnvironmentAction({ value }))
  window.resetEnvironment = () => store.dispatch(resetEnvironmentAction())

  window.setOnomatopoeia = ({ value }) => store.dispatch(setOnomatopoeiaAction({ value }))
  window.resetOnomatopoeia = () => store.dispatch(resetOnomatopoeiaAction())

  window.addAnimationInList = ({ animation }) => addAnimationInList({ animation })

  window.bubble = () => store.getState().bubble
  window.activities = () => store.getState().activities
}
