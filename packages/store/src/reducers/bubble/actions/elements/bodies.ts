import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { BubbleStateElementsBodyAction, BubbleStateElementsBodyItemList } from '../../types'

export const addBodyInList = (body: BubbleStateElementsBodyItemList): void => {
  store.dispatch(bubbleActions.addBodyInList(body))
}

export const removeBodyInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeBodyInList({ id }))
}

export const resetBody = (): void => {
  store.dispatch(bubbleActions.resetBody())
}

export const setActionBody = (body: BubbleStateElementsBodyAction): void => {
  store.dispatch(bubbleActions.setActionBody(body))
}

export const resetActionBody = (): void => {
  store.dispatch(bubbleActions.resetActionBody())
}
