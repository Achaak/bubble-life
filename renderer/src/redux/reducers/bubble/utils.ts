import {
  addAnimationInListAction,
  addBodyInListAction,
  addClotheInListAction,
  addEnvironmentInListAction,
  addEyesInListAction,
  addHatInListAction,
  addOnomatopoeiaInListAction,
  removeAnimationInListAction,
  sortAnimationAction,
} from '.'
import { resetActionsAction } from '../actions'
import {
  AnimationtListItem,
  BodiesElementListItem,
  ClothesElementListItem,
  EnvironmentsElementListItem,
  EyesElementListItem,
  HatsElementListItem,
  OnomatopoeiaElementListItem,
} from './state'
import { store } from '@src/redux/store'

/* -------------------- ELEMENTS -------------------- */
/* ---------- EYES ---------- */
export const addEyesInList = (eyesElementListItem: EyesElementListItem): void => {
  store.dispatch(addEyesInListAction(eyesElementListItem))
}

/* ---------- ENVIRONMENT ---------- */
export const addEnvironmentInList = (
  environmentsElementListItem: EnvironmentsElementListItem
): void => {
  store.dispatch(addEnvironmentInListAction(environmentsElementListItem))
}

/* ---------- CLOTHE ---------- */
export const addClotheInList = (clothesElementListItem: ClothesElementListItem): void => {
  store.dispatch(addClotheInListAction(clothesElementListItem))
}

/* ---------- HAT ---------- */
export const addHatInList = (hatsElementListItem: HatsElementListItem): void => {
  store.dispatch(addHatInListAction(hatsElementListItem))
}

/* ---------- BODY ---------- */
export const addBodyInList = (bodiesElementListItem: BodiesElementListItem): void => {
  store.dispatch(addBodyInListAction(bodiesElementListItem))
}

/* ---------- ONOMATOPOEIA ---------- */
export const addOnomatopoeiaInList = (
  onomatopoeiaElementListItem: OnomatopoeiaElementListItem
): void => {
  store.dispatch(addOnomatopoeiaInListAction(onomatopoeiaElementListItem))
}

/* -------------------- ANIMATIONS -------------------- */
export const addAnimationInList = (animation: AnimationtListItem): void => {
  store.dispatch(addAnimationInListAction(animation))
  store.dispatch(sortAnimationAction())
}

export const removeAnimationInList = ({ id }: { id: string }): void => {
  store.dispatch(removeAnimationInListAction({ id }))
  store.dispatch(sortAnimationAction())
}

export const resetAnimation = (): void => {
  store.dispatch(resetActionsAction())
}
