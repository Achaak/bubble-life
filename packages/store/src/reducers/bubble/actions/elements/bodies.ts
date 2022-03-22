import { getBubble } from '..'
import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { BodyElementListItem } from '../../types'

export const addBodyInList = (BodyElementListItem: BodyElementListItem): void => {
  store.dispatch(bubbleActions.addBodyInList(BodyElementListItem))
  store.dispatch(bubbleActions.sortBodiesInList())
  store.dispatch(bubbleActions.transferBodyInListToCurrent())
}

export const removeBodyInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeBodyInList({ id }))
  store.dispatch(bubbleActions.sortBodiesInList())
  store.dispatch(bubbleActions.transferBodyInListToCurrent())
}

export const resetBody = (): void => {
  store.dispatch(bubbleActions.resetBody())
  store.dispatch(bubbleActions.transferBodyInListToCurrent())
}

export const setCurrentBody = ({ id }: { id: string }): void => {
  const {
    elements: {
      body: { list: bodyList },
    },
  } = getBubble()

  const body = bodyList.find((item) => item.id === id)

  if (!body) {
    return
  }
  store.dispatch(bubbleActions.setCurrentBody(body))
  store.dispatch(bubbleActions.removeBodyInList({ id }))
}

export const resetCurrentBody = (): void => {
  store.dispatch(bubbleActions.resetCurrentBody())
  store.dispatch(bubbleActions.transferBodyInListToCurrent())
}

export const removeBodyAllOver = ({ id }: { id: string }): void => {
  removeBodyInList({ id })
  resetCurrentBody()
  store.dispatch(bubbleActions.transferBodyInListToCurrent())
}
