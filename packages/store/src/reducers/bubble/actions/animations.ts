import { bubbleActions } from '..'
import { store } from '../../../store'
import type { BubbleAnimationAction, BubbleAnimationItemList } from '../types'

export const resetAnimation = (): void => {
  store.dispatch(bubbleActions.resetAnimation())
}

export const addAnimationInList = (animation: BubbleAnimationItemList): void => {
  store.dispatch(bubbleActions.addAnimationInList(animation))
}

export const removeAnimationInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeAnimationInList({ id }))
}

export const setActionAnimation = (animation: BubbleAnimationAction): void => {
  store.dispatch(bubbleActions.setActionAnimation(animation))
}

export const resetActionAnimation = (): void => {
  store.dispatch(bubbleActions.resetActionAnimation())
}
