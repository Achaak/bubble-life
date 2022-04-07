import type { Message } from '@bubble/types'
import { getBubble } from '..'
import { bubbleActions } from '../..'
import { store } from '../../../../store'
import { setCurrentMessage } from './current'

export type HasMessageInWaitingListById = { id: string }
export const hasMessageInWaitingListById = ({ id }: HasMessageInWaitingListById): boolean => {
  const {
    message: { waitingList },
  } = getBubble()

  return waitingList.filter((item) => item.id === id).length > 0
}

export type AddMessageInWaitingList = Message
export const addMessageInWaitingList = (message: AddMessageInWaitingList): void => {
  store.dispatch(bubbleActions.addMessageInWaitingList(message))
  store.dispatch(bubbleActions.sortMessagesInWaitingList())
}

export type RemoveMessageFromWaitingList = { id: string }
export const removeMessageFromWaitingList = ({ id }: RemoveMessageFromWaitingList): void => {
  store.dispatch(bubbleActions.removeMessageFromWaitingList({ id }))
  store.dispatch(bubbleActions.sortMessagesInWaitingList())
}

export type TransferMessageFromWaitingListToCurrent = { id: string }
export const transferMessageFromWaitingListToCurrent = ({
  id,
}: TransferMessageFromWaitingListToCurrent): void => {
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
