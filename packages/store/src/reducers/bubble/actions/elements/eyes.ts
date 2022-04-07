import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { BubbleStateElementsEyesAction, BubbleStateElementsEyesItemList } from '../../types'

export type AddEyesInList = BubbleStateElementsEyesItemList
export const addEyesInList = (eyes: AddEyesInList): void => {
  store.dispatch(bubbleActions.addEyesInList(eyes))
}

export type RemoveEyesInList = { id: string }
export const removeEyesInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeEyesInList({ id }))
}

export const resetEyes = (): void => {
  store.dispatch(bubbleActions.resetEyes())
}

export type SetActionEyes = BubbleStateElementsEyesAction
export const setActionEyes = (eyes: SetActionEyes): void => {
  store.dispatch(bubbleActions.setActionEyes(eyes))
}

export const resetActionEyes = (): void => {
  store.dispatch(bubbleActions.resetActionEyes())
}
