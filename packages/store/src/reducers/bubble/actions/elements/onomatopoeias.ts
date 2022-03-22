import { getBubble } from '..'
import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { OnomatopoeiaElementListItem } from '../../types'

export const addOnomatopoeiaInList = (
  onomatopoeiaElementListItem: OnomatopoeiaElementListItem
): void => {
  store.dispatch(bubbleActions.addOnomatopoeiaInList(onomatopoeiaElementListItem))
  store.dispatch(bubbleActions.sortOnomatopoeiasInList())
  store.dispatch(bubbleActions.transferOnomatopoeiaInListToCurrent())
}

export const removeOnomatopoeiaInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeOnomatopoeiaInList({ id }))
  store.dispatch(bubbleActions.sortOnomatopoeiasInList())
  store.dispatch(bubbleActions.transferOnomatopoeiaInListToCurrent())
}

export const resetOnomatopoeia = (): void => {
  store.dispatch(bubbleActions.resetOnomatopoeia())
  store.dispatch(bubbleActions.transferOnomatopoeiaInListToCurrent())
}

export const setCurrentOnomatopoeia = ({ id }: { id: string }): void => {
  const {
    elements: {
      onomatopoeia: { list: onomatopoeiaList },
    },
  } = getBubble()

  const onomatopoeia = onomatopoeiaList.find((item) => item.id === id)

  if (!onomatopoeia) {
    return
  }
  store.dispatch(bubbleActions.setCurrentOnomatopoeia(onomatopoeia))
  store.dispatch(bubbleActions.removeOnomatopoeiaInList({ id }))
}

export const resetCurrentOnomatopoeia = (): void => {
  store.dispatch(bubbleActions.resetCurrentOnomatopoeia())
  store.dispatch(bubbleActions.transferOnomatopoeiaInListToCurrent())
}

export const removeOnomatopoeiaAllOver = ({ id }: { id: string }): void => {
  removeOnomatopoeiaInList({ id })
  resetCurrentOnomatopoeia()
  store.dispatch(bubbleActions.transferOnomatopoeiaInListToCurrent())
}
