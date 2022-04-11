import type { AddAnimationInList, RemoveAnimationInList, SetActionAnimation } from '@bubble/types'
import { bubbleActions } from '..'
import { store } from '../../../store'

export const resetAnimation = (): void => {
  store.dispatch(bubbleActions.resetAnimation())
}

export const addAnimationInList = (animation: AddAnimationInList): void => {
  store.dispatch(bubbleActions.addAnimationInList(animation))
}

export const removeAnimationInList = ({ id }: RemoveAnimationInList): void => {
  store.dispatch(bubbleActions.removeAnimationInList({ id }))
}

export const setActionAnimation = (animation: SetActionAnimation): void => {
  store.dispatch(bubbleActions.setActionAnimation(animation))
}

export const resetActionAnimation = (): void => {
  store.dispatch(bubbleActions.resetActionAnimation())
}
