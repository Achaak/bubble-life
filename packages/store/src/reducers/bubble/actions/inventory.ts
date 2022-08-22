import type {
  AddInventoryItem,
  HasInventoryItem,
  RemoveInventoryItem,
  GetStockInventoryItem,
} from '@bubble/types';
import { getBubble } from './index';
import { bubbleActions } from '../index';
import { store } from '../../../store';

export const addInventoryItem = (params: AddInventoryItem): void => {
  store.dispatch(bubbleActions.addInventoryItem(params));
};

export const removeInventoryItem = (params: RemoveInventoryItem): void => {
  store.dispatch(bubbleActions.removeInventoryItem(params));
};

export const hasInventoryItem = ({
  number,
  type,
}: HasInventoryItem): boolean => {
  const { inventory } = getBubble();

  return inventory.some((item) => item.type === type && item.stock >= number);
};

export const getStockInventoryItem = ({
  type,
}: GetStockInventoryItem): number => {
  const { inventory } = getBubble();

  return inventory.find((item) => item.type === type)?.stock || 0;
};
