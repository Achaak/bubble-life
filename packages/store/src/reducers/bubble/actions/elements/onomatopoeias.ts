import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type {
  BubbleStateElementsOnomatopoeiaAction,
  BubbleStateElementsOnomatopoeiaItemList,
} from '../../types'

export type AddOnomatopoeiaInList = BubbleStateElementsOnomatopoeiaItemList
export const addOnomatopoeiaInList = (onomatopoeia: AddOnomatopoeiaInList): void => {
  store.dispatch(bubbleActions.addOnomatopoeiaInList(onomatopoeia))
}

export type RemoveOnomatopoeiaInList = { id: string }
export const removeOnomatopoeiaInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeOnomatopoeiaInList({ id }))
}

export const resetOnomatopoeia = (): void => {
  store.dispatch(bubbleActions.resetOnomatopoeia())
}

export type SetActionOnomatopoeia = BubbleStateElementsOnomatopoeiaAction
export const setActionOnomatopoeia = (onomatopoeia: SetActionOnomatopoeia): void => {
  store.dispatch(bubbleActions.setActionOnomatopoeia(onomatopoeia))
}

export const resetActionOnomatopoeia = (): void => {
  store.dispatch(bubbleActions.resetActionOnomatopoeia())
}
