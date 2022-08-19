import type {
  BubbleStateElementsBodyAction,
  BubbleStateElementsBodyItemList,
} from '../types.js';

export type AddBodyInList = BubbleStateElementsBodyItemList;

export type RemoveBodyInList = { id: string };

export type SetActionBody = BubbleStateElementsBodyAction;
