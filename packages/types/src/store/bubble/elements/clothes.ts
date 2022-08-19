import type {
  BubbleStateElementsClotheAction,
  BubbleStateElementsClotheItemList,
} from '../types.js';

export type AddClotheInList = BubbleStateElementsClotheItemList;

export type RemoveClotheInList = { id: string };

export type SetActionClothe = BubbleStateElementsClotheAction;
