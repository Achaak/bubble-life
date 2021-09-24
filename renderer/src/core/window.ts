import { resetActivitiesAction } from '@src/redux/reducers/activities'
import {
  resetBubbleAction,
  resetHappinessAction,
  resetHealthAction,
  resetSaturationAction,
  resetTirednessAction,
  resetWeightAction,
  setHappinessAction,
  setHealthAction,
  setSaturationAction,
  setTirednessAction,
  setWeightAction,
} from '@src/redux/reducers/bubble'
import { addAnimationInList } from '@src/redux/reducers/bubble/utils'
import { store } from '@src/redux/store'
import { Animation } from '@src/types/animation'

declare global {
  interface Window {
    resetBubble: () => void

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

    addAnimationInList: ({ animation }: { animation: Animation }) => void

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

  window.addAnimationInList = ({ animation }) => addAnimationInList({ animation })

  window.bubble = () => store.getState().bubble
  window.activities = () => store.getState().activities
}
