import type { AddHatInList, SetActionHat } from '@bubble/types'
import { bubbleActions } from '../..'
import { store } from '../../../../store'

export const addHatInList = (hat: AddHatInList): void => {
  store.dispatch(bubbleActions.addHatInList(hat))
}

export const removeHatInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeHatInList({ id }))
}

export const resetHat = (): void => {
  store.dispatch(bubbleActions.resetHat())
}

export const setActionHat = (hat: SetActionHat): void => {
  store.dispatch(bubbleActions.setActionHat(hat))
}

export const resetActionHat = (): void => {
  store.dispatch(bubbleActions.resetActionHat())
}
