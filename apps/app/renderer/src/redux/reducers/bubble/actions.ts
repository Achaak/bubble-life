import { store } from '@src/redux/store'

import { bubbleActions } from '.'
import { actionsActions } from '../actions'
import {
  AnimationtListItem,
  BodyElementListItem,
  ClotheElementListItem,
  EnvironmentElementListItem,
  EyesElementListItem,
  HatElementListItem,
  InventoryItemType,
  OnomatopoeiaElementListItem,
} from './state'

export const resetBubble = (): void => {
  store.dispatch(bubbleActions.resetBubble())
}

/* -------------------- ELEMENTS -------------------- */
/* ---------- EYES ---------- */
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
  store.dispatch(actionsActions.resetActions())
  store.dispatch(bubbleActions.transferEyesInListToCurrent())
}
export const setCurrentEyes = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.eyes.list
  const eyes = list.find((item) => item.id === id)

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

/* ---------- ENVIRONMENT ---------- */
export const addEnvironmentInList = (
  EnvironmentElementListItem: EnvironmentElementListItem
): void => {
  store.dispatch(bubbleActions.addEnvironmentInList(EnvironmentElementListItem))
  store.dispatch(bubbleActions.sortEnvironmentsInList())
  store.dispatch(bubbleActions.transferEnvironmentInListToCurrent())
}
export const removeEnvironmentInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeEnvironmentInList({ id }))
  store.dispatch(bubbleActions.sortEnvironmentsInList())
  store.dispatch(bubbleActions.transferEnvironmentInListToCurrent())
}
export const resetEnvironment = (): void => {
  store.dispatch(actionsActions.resetActions())
  store.dispatch(bubbleActions.transferEnvironmentInListToCurrent())
}
export const setCurrentEnvironment = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.environment.list
  const environment = list.find((item) => item.id === id)

  store.dispatch(bubbleActions.setCurrentEnvironment(environment))
  store.dispatch(bubbleActions.removeEnvironmentInList({ id }))
}
export const resetCurrentEnvironment = (): void => {
  store.dispatch(bubbleActions.resetCurrentEnvironment())
  store.dispatch(bubbleActions.transferEnvironmentInListToCurrent())
}
export const removeEnvironmentAllOver = ({ id }: { id: string }): void => {
  removeEnvironmentInList({ id })
  resetCurrentEnvironment()
  store.dispatch(bubbleActions.transferEnvironmentInListToCurrent())
}

/* ---------- CLOTHE ---------- */
export const addClotheInList = (ClotheElementListItem: ClotheElementListItem): void => {
  store.dispatch(bubbleActions.addClotheInList(ClotheElementListItem))
  store.dispatch(bubbleActions.sortClothesInList())
  store.dispatch(bubbleActions.transferClotheInListToCurrent())
}
export const removeClotheInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeClotheInList({ id }))
  store.dispatch(bubbleActions.sortClothesInList())
  store.dispatch(bubbleActions.transferClotheInListToCurrent())
}
export const resetClothe = (): void => {
  store.dispatch(actionsActions.resetActions())
  store.dispatch(bubbleActions.transferClotheInListToCurrent())
}
export const setCurrentClothe = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.clothe.list
  const clothe = list.find((item) => item.id === id)

  store.dispatch(bubbleActions.setCurrentClothe(clothe))
  store.dispatch(bubbleActions.removeClotheInList({ id }))
}
export const resetCurrentClothe = (): void => {
  store.dispatch(bubbleActions.resetCurrentClothe())
  store.dispatch(bubbleActions.transferClotheInListToCurrent())
}
export const removeClotheAllOver = ({ id }: { id: string }): void => {
  removeClotheInList({ id })
  resetCurrentClothe()
  store.dispatch(bubbleActions.transferClotheInListToCurrent())
}

/* ---------- HAT ---------- */
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
  store.dispatch(actionsActions.resetActions())
  store.dispatch(bubbleActions.transferHatInListToCurrent())
}
export const setCurrentHat = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.hat.list
  const hat = list.find((item) => item.id === id)

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

/* ---------- BODY ---------- */
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
  store.dispatch(actionsActions.resetActions())
  store.dispatch(bubbleActions.transferBodyInListToCurrent())
}
export const setCurrentBody = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.body.list
  const body = list.find((item) => item.id === id)

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

/* ---------- ONOMATOPOEIA ---------- */
export const addOnomatopoeiaInList = (
  onomatopoeiaElementListItem: OnomatopoeiaElementListItem
): void => {
  store.dispatch(bubbleActions.addOnomatopoeiaInList(onomatopoeiaElementListItem))
  store.dispatch(bubbleActions.sortOnomatopoeiasInList())
  store.dispatch(bubbleActions.transferOnomatopoeiaInListToCurrent())
}
export const removeOnomatopoeiaInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeOnomatopoeiaInList({ id }))
  store.dispatch(bubbleActions.sortOnomatopoeiasInList())
  store.dispatch(bubbleActions.transferOnomatopoeiaInListToCurrent())
}
export const resetOnomatopoeia = (): void => {
  store.dispatch(actionsActions.resetActions())
  store.dispatch(bubbleActions.transferOnomatopoeiaInListToCurrent())
}
export const setCurrentOnomatopoeia = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.onomatopoeia.list
  const onomatopoeia = list.find((item) => item.id === id)

  store.dispatch(bubbleActions.setCurrentOnomatopoeia(onomatopoeia))
  store.dispatch(bubbleActions.removeOnomatopoeiaInList({ id }))
}
export const resetCurrentOnomatopoeia = (): void => {
  store.dispatch(bubbleActions.resetCurrentOnomatopoeia())
  store.dispatch(bubbleActions.transferOnomatopoeiaInListToCurrent())
}
export const removeOnomatopoeiaAllOver = ({ id }: { id: string }): void => {
  removeOnomatopoeiaInList({ id })
  resetCurrentOnomatopoeia()
  store.dispatch(bubbleActions.transferOnomatopoeiaInListToCurrent())
}

/* -------------------- ANIMATIONS -------------------- */
export const addAnimationInList = (animation: AnimationtListItem): void => {
  store.dispatch(bubbleActions.addAnimationInList(animation))
  store.dispatch(bubbleActions.sortAnimationsInList())
  store.dispatch(bubbleActions.transferAnimationInListToCurrent())
}
export const removeAnimationInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeAnimationInList({ id }))
  store.dispatch(bubbleActions.sortAnimationsInList())
  store.dispatch(bubbleActions.transferAnimationInListToCurrent())
}
export const resetAnimation = (): void => {
  store.dispatch(actionsActions.resetActions())
  store.dispatch(bubbleActions.transferAnimationInListToCurrent())
}
export const setCurrentAnimation = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.animation.list
  const animation = list.find((item) => item.id === id)

  store.dispatch(bubbleActions.setCurrentAnimation(animation))
  store.dispatch(bubbleActions.removeAnimationInList({ id }))
}
export const resetCurrentAnimation = (): void => {
  store.dispatch(actionsActions.resetCurrentAction())
  store.dispatch(bubbleActions.transferAnimationInListToCurrent())
}
export const removeAnimationAllOver = ({ id }: { id: string }): void => {
  removeAnimationInList({ id })
  resetCurrentAnimation()
  store.dispatch(bubbleActions.transferAnimationInListToCurrent())
}

/* -------------------- INVENTORY -------------------- */
export const addInventoryItem = (params: { type: InventoryItemType; number: number }): void => {
  store.dispatch(bubbleActions.addInventoryItem(params))
}
export const removeInventoryItem = (params: { type: InventoryItemType; number: number }): void => {
  store.dispatch(bubbleActions.removeInventoryItem(params))
}
export const hasInventoryItem = ({
  number,
  type,
}: {
  type: InventoryItemType
  number: number
}): boolean => {
  return store
    .getState()
    .bubble.inventory.some((item) => item.type === type && item.stock >= number)
}
