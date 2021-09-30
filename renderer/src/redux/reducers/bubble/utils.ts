import {
  addAnimationInListAction,
  addBodyInListAction,
  addClotheInListAction,
  addEnvironmentInListAction,
  addEyesInListAction,
  addHatInListAction,
  addInventoryItemAction,
  addOnomatopoeiaInListAction,
  removeAnimationInListAction,
  removeBodyInListAction,
  removeClotheInListAction,
  removeEnvironmentInListAction,
  removeEyesInListAction,
  removeHatInListAction,
  removeInventoryItemAction,
  removeOnomatopoeiaInListAction,
  resetCurrentBodyAction,
  resetCurrentClotheAction,
  resetCurrentEnvironmentAction,
  resetCurrentEyesAction,
  resetCurrentHatAction,
  resetCurrentOnomatopoeiaAction,
  setCurrentAnimationAction,
  setCurrentBodyAction,
  setCurrentClotheAction,
  setCurrentEnvironmentAction,
  setCurrentEyesAction,
  setCurrentHatAction,
  setCurrentOnomatopoeiaAction,
  sortAnimationsInListAction,
  sortBodiesInListAction,
  sortClothesInListAction,
  sortEnvironmentsInListAction,
  sortEyesInListAction,
  sortHatsInListAction,
  sortOnomatopoeiasInListAction,
  transferAnimationInListToCurrentAction,
  transferBodyInListToCurrentAction,
  transferClotheInListToCurrentAction,
  transferEnvironmentInListToCurrentAction,
  transferEyesInListToCurrentAction,
  transferHatInListToCurrentAction,
  transferOnomatopoeiaInListToCurrentAction,
} from '.'
import { resetActionsAction, resetCurrentActionAction } from '../actions'
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
import { store } from '@src/redux/store'

/* -------------------- ELEMENTS -------------------- */
/* ---------- EYES ---------- */
export const addEyesInList = (eyesElementListItem: EyesElementListItem): void => {
  store.dispatch(addEyesInListAction(eyesElementListItem))
  store.dispatch(sortEyesInListAction())
  store.dispatch(transferEyesInListToCurrentAction())
}
export const removeEyesInList = ({ id }: { id: string }): void => {
  store.dispatch(removeEyesInListAction({ id }))
  store.dispatch(sortEyesInListAction())
  store.dispatch(transferEyesInListToCurrentAction())
}
export const resetEyes = (): void => {
  store.dispatch(resetActionsAction())
  store.dispatch(transferEyesInListToCurrentAction())
}
export const setCurrentEyes = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.eyes.list
  const eyes = list.find((item) => item.id === id)

  store.dispatch(setCurrentEyesAction(eyes))
  store.dispatch(removeEyesInListAction({ id }))
}
export const resetCurrentEyes = (): void => {
  store.dispatch(resetCurrentEyesAction())
  store.dispatch(transferEyesInListToCurrentAction())
}
export const removeEyesAllOver = ({ id }: { id: string }): void => {
  removeEyesInList({ id })
  resetCurrentEyes()
  store.dispatch(transferEyesInListToCurrentAction())
}

/* ---------- ENVIRONMENT ---------- */
export const addEnvironmentInList = (
  EnvironmentElementListItem: EnvironmentElementListItem
): void => {
  store.dispatch(addEnvironmentInListAction(EnvironmentElementListItem))
  store.dispatch(sortEnvironmentsInListAction())
  store.dispatch(transferEnvironmentInListToCurrentAction())
}
export const removeEnvironmentInList = ({ id }: { id: string }): void => {
  store.dispatch(removeEnvironmentInListAction({ id }))
  store.dispatch(sortEnvironmentsInListAction())
  store.dispatch(transferEnvironmentInListToCurrentAction())
}
export const resetEnvironment = (): void => {
  store.dispatch(resetActionsAction())
  store.dispatch(transferEnvironmentInListToCurrentAction())
}
export const setCurrentEnvironment = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.environment.list
  const environment = list.find((item) => item.id === id)

  store.dispatch(setCurrentEnvironmentAction(environment))
  store.dispatch(removeEnvironmentInListAction({ id }))
}
export const resetCurrentEnvironment = (): void => {
  store.dispatch(resetCurrentEnvironmentAction())
  store.dispatch(transferEnvironmentInListToCurrentAction())
}
export const removeEnvironmentAllOver = ({ id }: { id: string }): void => {
  removeEnvironmentInList({ id })
  resetCurrentEnvironment()
  store.dispatch(transferEnvironmentInListToCurrentAction())
}

/* ---------- CLOTHE ---------- */
export const addClotheInList = (ClotheElementListItem: ClotheElementListItem): void => {
  store.dispatch(addClotheInListAction(ClotheElementListItem))
  store.dispatch(sortClothesInListAction())
  store.dispatch(transferClotheInListToCurrentAction())
}
export const removeClotheInList = ({ id }: { id: string }): void => {
  store.dispatch(removeClotheInListAction({ id }))
  store.dispatch(sortClothesInListAction())
  store.dispatch(transferClotheInListToCurrentAction())
}
export const resetClothe = (): void => {
  store.dispatch(resetActionsAction())
  store.dispatch(transferClotheInListToCurrentAction())
}
export const setCurrentClothe = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.clothe.list
  const clothe = list.find((item) => item.id === id)

  store.dispatch(setCurrentClotheAction(clothe))
  store.dispatch(removeClotheInListAction({ id }))
}
export const resetCurrentClothe = (): void => {
  store.dispatch(resetCurrentClotheAction())
  store.dispatch(transferClotheInListToCurrentAction())
}
export const removeClotheAllOver = ({ id }: { id: string }): void => {
  removeClotheInList({ id })
  resetCurrentClothe()
  store.dispatch(transferClotheInListToCurrentAction())
}

/* ---------- HAT ---------- */
export const addHatInList = (HatElementListItem: HatElementListItem): void => {
  store.dispatch(addHatInListAction(HatElementListItem))
  store.dispatch(sortHatsInListAction())
  store.dispatch(transferHatInListToCurrentAction())
}
export const removeHatInList = ({ id }: { id: string }): void => {
  store.dispatch(removeHatInListAction({ id }))
  store.dispatch(sortHatsInListAction())
  store.dispatch(transferHatInListToCurrentAction())
}
export const resetHat = (): void => {
  store.dispatch(resetActionsAction())
  store.dispatch(transferHatInListToCurrentAction())
}
export const setCurrentHat = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.hat.list
  const hat = list.find((item) => item.id === id)

  store.dispatch(setCurrentHatAction(hat))
  store.dispatch(removeHatInListAction({ id }))
}
export const resetCurrentHat = (): void => {
  store.dispatch(resetCurrentHatAction())
  store.dispatch(transferHatInListToCurrentAction())
}
export const removeHatAllOver = ({ id }: { id: string }): void => {
  removeHatInList({ id })
  resetCurrentHat()
  store.dispatch(transferHatInListToCurrentAction())
}

/* ---------- BODY ---------- */
export const addBodyInList = (BodyElementListItem: BodyElementListItem): void => {
  store.dispatch(addBodyInListAction(BodyElementListItem))
  store.dispatch(sortBodiesInListAction())
  store.dispatch(transferBodyInListToCurrentAction())
}
export const removeBodyInList = ({ id }: { id: string }): void => {
  store.dispatch(removeBodyInListAction({ id }))
  store.dispatch(sortBodiesInListAction())
  store.dispatch(transferBodyInListToCurrentAction())
}
export const resetBody = (): void => {
  store.dispatch(resetActionsAction())
  store.dispatch(transferBodyInListToCurrentAction())
}
export const setCurrentBody = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.body.list
  const body = list.find((item) => item.id === id)

  store.dispatch(setCurrentBodyAction(body))
  store.dispatch(removeBodyInListAction({ id }))
}
export const resetCurrentBody = (): void => {
  store.dispatch(resetCurrentBodyAction())
  store.dispatch(transferBodyInListToCurrentAction())
}
export const removeBodyAllOver = ({ id }: { id: string }): void => {
  removeBodyInList({ id })
  resetCurrentBody()
  store.dispatch(transferBodyInListToCurrentAction())
}

/* ---------- ONOMATOPOEIA ---------- */
export const addOnomatopoeiaInList = (
  onomatopoeiaElementListItem: OnomatopoeiaElementListItem
): void => {
  store.dispatch(addOnomatopoeiaInListAction(onomatopoeiaElementListItem))
  store.dispatch(sortOnomatopoeiasInListAction())
  store.dispatch(transferOnomatopoeiaInListToCurrentAction())
}
export const removeOnomatopoeiaInList = ({ id }: { id: string }): void => {
  store.dispatch(removeOnomatopoeiaInListAction({ id }))
  store.dispatch(sortOnomatopoeiasInListAction())
  store.dispatch(transferOnomatopoeiaInListToCurrentAction())
}
export const resetOnomatopoeia = (): void => {
  store.dispatch(resetActionsAction())
  store.dispatch(transferOnomatopoeiaInListToCurrentAction())
}
export const setCurrentOnomatopoeia = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.elements.onomatopoeia.list
  const onomatopoeia = list.find((item) => item.id === id)

  store.dispatch(setCurrentOnomatopoeiaAction(onomatopoeia))
  store.dispatch(removeOnomatopoeiaInListAction({ id }))
}
export const resetCurrentOnomatopoeia = (): void => {
  store.dispatch(resetCurrentOnomatopoeiaAction())
  store.dispatch(transferOnomatopoeiaInListToCurrentAction())
}
export const removeOnomatopoeiaAllOver = ({ id }: { id: string }): void => {
  removeOnomatopoeiaInList({ id })
  resetCurrentOnomatopoeia()
  store.dispatch(transferOnomatopoeiaInListToCurrentAction())
}

/* -------------------- ANIMATIONS -------------------- */
export const addAnimationInList = (animation: AnimationtListItem): void => {
  store.dispatch(addAnimationInListAction(animation))
  store.dispatch(sortAnimationsInListAction())
  store.dispatch(transferAnimationInListToCurrentAction())
}
export const removeAnimationInList = ({ id }: { id: string }): void => {
  store.dispatch(removeAnimationInListAction({ id }))
  store.dispatch(sortAnimationsInListAction())
  store.dispatch(transferAnimationInListToCurrentAction())
}
export const resetAnimation = (): void => {
  store.dispatch(resetActionsAction())
  store.dispatch(transferAnimationInListToCurrentAction())
}
export const setCurrentAnimation = ({ id }: { id: string }): void => {
  const list = store.getState().bubble.animation.list
  const animation = list.find((item) => item.id === id)

  store.dispatch(setCurrentAnimationAction(animation))
  store.dispatch(removeAnimationInListAction({ id }))
}
export const resetCurrentAnimation = (): void => {
  store.dispatch(resetCurrentActionAction())
  store.dispatch(transferAnimationInListToCurrentAction())
}
export const removeAnimationAllOver = ({ id }: { id: string }): void => {
  removeAnimationInList({ id })
  resetCurrentAnimation()
  store.dispatch(transferAnimationInListToCurrentAction())
}

/* -------------------- INVENTORY -------------------- */
export const addInventoryItem = (params: { type: InventoryItemType; number: number }): void => {
  store.dispatch(addInventoryItemAction(params))
}
export const removeInventoryItem = (params: { type: InventoryItemType; number: number }): void => {
  store.dispatch(removeInventoryItemAction(params))
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
