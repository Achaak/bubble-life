import { bubbleActions } from '..'
import { store } from '../../../store'
import type { BubbleAnimationAction, BubbleAnimationItemList } from '../types'

export const resetAnimation = (): void => {
  store.dispatch(bubbleActions.resetAnimation())
}

export type AddAnimationInList = BubbleAnimationItemList
export const addAnimationInList = (animation: AddAnimationInList): void => {
  store.dispatch(bubbleActions.addAnimationInList(animation))
}

export type RemoveAnimationInList = { id: string }
export const removeAnimationInList = ({ id }: RemoveAnimationInList): void => {
  store.dispatch(bubbleActions.removeAnimationInList({ id }))
}

export type SetActionAnimation = BubbleAnimationAction
export const setActionAnimation = (animation: SetActionAnimation): void => {
  store.dispatch(bubbleActions.setActionAnimation(animation))
}

export const resetActionAnimation = (): void => {
  store.dispatch(bubbleActions.resetActionAnimation())
}
