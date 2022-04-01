import type { Message } from '@bubble/types'
import { getBubble } from '..'
import { bubbleActions } from '../..'
import { store } from '../../../../store'

export const setCurrentMessage = (action: Message): void => {
  store.dispatch(bubbleActions.setCurrentMessage(action))
}

export const resetCurrentMessage = (): void => {
  store.dispatch(bubbleActions.resetCurrentMessage())
}

export const hasActionInCurrentById = ({ id }: { id: string }): boolean => {
  const {
    message: { current },
  } = getBubble()

  return current?.id === id
}
