import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { BubbleStateElementsEyesAction, BubbleStateElementsEyesItemList } from '../../types'

export const addEyesInList = (eyes: BubbleStateElementsEyesItemList): void => {
  store.dispatch(bubbleActions.addEyesInList(eyes))
}

export const removeEyesInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeEyesInList({ id }))
}

export const resetEyes = (): void => {
  store.dispatch(bubbleActions.resetEyes())
}

export const setActionEyes = (eyes: BubbleStateElementsEyesAction): void => {
  store.dispatch(bubbleActions.setActionEyes(eyes))
}

export const resetActionEyes = (): void => {
  store.dispatch(bubbleActions.resetActionEyes())
}
