import { getBubble } from '.'
import { bubbleActions } from '..'
import { store } from '../../../store'
import type { AnimationtListItem } from '../types'

export const addAnimationInList = (animation: AnimationtListItem): void => {
  store.dispatch(bubbleActions.addAnimationInList(animation))
  store.dispatch(bubbleActions.sortAnimationsInList())
  store.dispatch(bubbleActions.transferAnimationInListToCurrent())
}

export const removeAnimationInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeAnimationInList({ id }))
  store.dispatch(bubbleActions.sortAnimationsInList())
  store.dispatch(bubbleActions.transferAnimationInListToCurrent())
}

export const resetAnimation = (): void => {
  store.dispatch(bubbleActions.resetAnimation())
  store.dispatch(bubbleActions.transferAnimationInListToCurrent())
}

export const setCurrentAnimation = ({ id }: { id: string }): void => {
  const {
    animation: { list: animationList },
  } = getBubble()

  const animation = animationList.find((item) => item.id === id)

  if (!animation) {
    return
  }
  store.dispatch(bubbleActions.setCurrentAnimation(animation))
  store.dispatch(bubbleActions.removeAnimationInList({ id }))
}

export const resetCurrentAnimation = (): void => {
  store.dispatch(bubbleActions.resetCurrentAnimation())
  store.dispatch(bubbleActions.transferAnimationInListToCurrent())
}

export const removeAnimationAllOver = ({ id }: { id: string }): void => {
  removeAnimationInList({ id })
  resetCurrentAnimation()
  store.dispatch(bubbleActions.transferAnimationInListToCurrent())
}
