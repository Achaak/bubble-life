import type {
  BubbleStateElementsOnomatopoeiaAction,
  BubbleStateElementsOnomatopoeiaItemList,
} from '../types';

export type AddOnomatopoeiaInList = BubbleStateElementsOnomatopoeiaItemList;

export type RemoveOnomatopoeiaInList = { id: string };

export type SetActionOnomatopoeia = BubbleStateElementsOnomatopoeiaAction;
