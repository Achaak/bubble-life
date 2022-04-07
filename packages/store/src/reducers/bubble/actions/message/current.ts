import type { Message } from '@bubble/types'
import { getBubble } from '..'
import { bubbleActions } from '../..'
import { store } from '../../../../store'

export type SetCurrentMessage = Message
export const setCurrentMessage = (action: SetCurrentMessage): void => {
  store.dispatch(bubbleActions.setCurrentMessage(action))
}

export const resetCurrentMessage = (): void => {
  store.dispatch(bubbleActions.resetCurrentMessage())
}

export type HasMessageInCurrentById = { id: string }
export const hasMessageInCurrentById = ({ id }: HasMessageInCurrentById): boolean => {
  const {
    message: { current },
  } = getBubble()

  return current?.id === id
}
