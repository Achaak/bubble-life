import type { Message } from '@bubble/types'
import { getBubble } from '..'
import { bubbleActions } from '../..'
import { store } from '../../../../store'
import { setCurrentMessage } from './current'

export const hasMessageInWaitingListById = ({ id }: { id: string }): boolean => {
  const {
    message: { waitingList },
  } = getBubble()

  return waitingList.filter((item) => item.id === id).length > 0
}

export const addMessageInWaitingList = (message: Message): void => {
  store.dispatch(bubbleActions.addMessageInWaitingList(message))
  store.dispatch(bubbleActions.sortMessagesInWaitingList())
}

export const removeMessageFromWaitingList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeMessageFromWaitingList({ id }))
  store.dispatch(bubbleActions.sortMessagesInWaitingList())
}

export const transferMessageFromWaitingListToCurrent = ({ id }: { id: string }): void => {
  const {
    message: { waitingList },
  } = getBubble()

  const action = waitingList.find((item) => item.id === id)

  if (!action) {
    return
  }

  removeMessageFromWaitingList({ id })
  setCurrentMessage(action)
}
