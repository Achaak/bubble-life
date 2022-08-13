import type {
  AddMessageInWaitingList,
  HasMessageInWaitingListById,
  RemoveMessageFromWaitingList,
  TransferMessageFromWaitingListToCurrent,
} from '@bubble/types'
import { getBubble } from '../index'
import { bubbleActions } from '../../index'
import { store } from '../../../../store'
import { setCurrentMessage } from './current'

export const hasMessageInWaitingListById = ({ id }: HasMessageInWaitingListById): boolean => {
  const {
    message: { waitingList },
  } = getBubble()

  return waitingList.filter((item) => item.id === id).length > 0
}

export const addMessageInWaitingList = (message: AddMessageInWaitingList): void => {
  store.dispatch(bubbleActions.addMessageInWaitingList(message))
  store.dispatch(bubbleActions.sortMessagesInWaitingList())
}

export const removeMessageFromWaitingList = ({ id }: RemoveMessageFromWaitingList): void => {
  store.dispatch(bubbleActions.removeMessageFromWaitingList({ id }))
  store.dispatch(bubbleActions.sortMessagesInWaitingList())
}

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
