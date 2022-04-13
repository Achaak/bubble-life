import type { HasMessageInCurrentById, SetCurrentMessage } from '@bubble/types'
import { getBubble } from '../index.js'
import { bubbleActions } from '../../index.js'
import { store } from '../../../../store.js'

export const setCurrentMessage = (action: SetCurrentMessage): void => {
  store.dispatch(bubbleActions.setCurrentMessage(action))
}

export const resetCurrentMessage = (): void => {
  store.dispatch(bubbleActions.resetCurrentMessage())
}

export const hasMessageInCurrentById = ({ id }: HasMessageInCurrentById): boolean => {
  const {
    message: { current },
  } = getBubble()

  return current?.id === id
}
