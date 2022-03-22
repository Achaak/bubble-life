import { getBubble } from '..'
import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { HatElementListItem } from '../../types'

export const addHatInList = (HatElementListItem: HatElementListItem): void => {
  store.dispatch(bubbleActions.addHatInList(HatElementListItem))
  store.dispatch(bubbleActions.sortHatsInList())
  store.dispatch(bubbleActions.transferHatInListToCurrent())
}

export const removeHatInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeHatInList({ id }))
  store.dispatch(bubbleActions.sortHatsInList())
  store.dispatch(bubbleActions.transferHatInListToCurrent())
}

export const resetHat = (): void => {
  store.dispatch(bubbleActions.resetHat())
  store.dispatch(bubbleActions.transferHatInListToCurrent())
}

export const setCurrentHat = ({ id }: { id: string }): void => {
  const {
    elements: {
      hat: { list: hatList },
    },
  } = getBubble()

  const hat = hatList.find((item) => item.id === id)

  if (!hat) {
    return
  }
  store.dispatch(bubbleActions.setCurrentHat(hat))
  store.dispatch(bubbleActions.removeHatInList({ id }))
}

export const resetCurrentHat = (): void => {
  store.dispatch(bubbleActions.resetCurrentHat())
  store.dispatch(bubbleActions.transferHatInListToCurrent())
}

export const removeHatAllOver = ({ id }: { id: string }): void => {
  removeHatInList({ id })
  resetCurrentHat()
  store.dispatch(bubbleActions.transferHatInListToCurrent())
}
