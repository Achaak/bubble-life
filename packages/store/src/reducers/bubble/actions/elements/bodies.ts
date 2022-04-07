import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { BubbleStateElementsBodyAction, BubbleStateElementsBodyItemList } from '../../types'

export type AddBodyInList = BubbleStateElementsBodyItemList
export const addBodyInList = (body: AddBodyInList): void => {
  store.dispatch(bubbleActions.addBodyInList(body))
}

export type RemoveBodyInList = { id: string }
export const removeBodyInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeBodyInList({ id }))
}

export const resetBody = (): void => {
  store.dispatch(bubbleActions.resetBody())
}

export type SetActionBody = BubbleStateElementsBodyAction
export const setActionBody = (body: SetActionBody): void => {
  store.dispatch(bubbleActions.setActionBody(body))
}

export const resetActionBody = (): void => {
  store.dispatch(bubbleActions.resetActionBody())
}
