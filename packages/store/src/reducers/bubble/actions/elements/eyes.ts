import { getBubble } from '..'
import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { EyesElementListItem } from '../../types'

export const addEyesInList = (eyesElementListItem: EyesElementListItem): void => {
  store.dispatch(bubbleActions.addEyesInList(eyesElementListItem))
  store.dispatch(bubbleActions.sortEyesInList())
  store.dispatch(bubbleActions.transferEyesInListToCurrent())
}

export const removeEyesInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeEyesInList({ id }))
  store.dispatch(bubbleActions.sortEyesInList())
  store.dispatch(bubbleActions.transferEyesInListToCurrent())
}

export const resetEyes = (): void => {
  store.dispatch(bubbleActions.resetEyes())
  store.dispatch(bubbleActions.transferEyesInListToCurrent())
}

export const setCurrentEyes = ({ id }: { id: string }): void => {
  const {
    elements: {
      eyes: { list: eyesList },
    },
  } = getBubble()

  const eyes = eyesList.find((item) => item.id === id)

  if (!eyes) {
    return
  }
  store.dispatch(bubbleActions.setCurrentEyes(eyes))
  store.dispatch(bubbleActions.removeEyesInList({ id }))
}

export const resetCurrentEyes = (): void => {
  store.dispatch(bubbleActions.resetCurrentEyes())
  store.dispatch(bubbleActions.transferEyesInListToCurrent())
}

export const removeEyesAllOver = ({ id }: { id: string }): void => {
  removeEyesInList({ id })
  resetCurrentEyes()
  store.dispatch(bubbleActions.transferEyesInListToCurrent())
}
