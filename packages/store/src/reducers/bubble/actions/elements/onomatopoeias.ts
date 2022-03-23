import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type {
  BubbleStateElementsOnomatopoeiaAction,
  BubbleStateElementsOnomatopoeiaItemList,
} from '../../types'

export const addOnomatopoeiaInList = (
  onomatopoeia: BubbleStateElementsOnomatopoeiaItemList
): void => {
  store.dispatch(bubbleActions.addOnomatopoeiaInList(onomatopoeia))
}

export const removeOnomatopoeiaInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeOnomatopoeiaInList({ id }))
}

export const resetOnomatopoeia = (): void => {
  store.dispatch(bubbleActions.resetOnomatopoeia())
}

export const setActionOnomatopoeia = (
  onomatopoeia: BubbleStateElementsOnomatopoeiaAction
): void => {
  store.dispatch(bubbleActions.setActionOnomatopoeia(onomatopoeia))
}

export const resetActionOnomatopoeia = (): void => {
  store.dispatch(bubbleActions.resetActionOnomatopoeia())
}
