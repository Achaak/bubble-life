import type {
  HasActionInCurrentById,
  HasActionInCurrentByName,
  SetCurrentAction,
} from '@bubble/types';
import { getActions } from './index';
import { actionsActions } from '../index';
import { store } from '../../../store';

export const setCurrentAction = (action: SetCurrentAction): void => {
  store.dispatch(actionsActions.setCurrentAction(action));
};

export const resetCurrentAction = (): void => {
  store.dispatch(actionsActions.resetCurrentAction());
};

export const hasActionInCurrentByName = ({
  name,
}: HasActionInCurrentByName): boolean => {
  const { current } = getActions();

  return current?.name === name;
};

export const hasActionInCurrentById = ({
  id,
}: HasActionInCurrentById): boolean => {
  const { current } = getActions();

  return current?.id === id;
};
