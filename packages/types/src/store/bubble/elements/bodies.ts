import type {
  BubbleStateElementsBodyAction,
  BubbleStateElementsBodyItemList,
} from '../types';

export type AddBodyInList = BubbleStateElementsBodyItemList;

export type RemoveBodyInList = { id: string };

export type SetActionBody = BubbleStateElementsBodyAction;
