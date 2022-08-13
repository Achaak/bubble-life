export * from './cancelList';
export * from './current';
export * from './waitingList';
export * from './types';

export type HasActionByName = { name: string };

export type HasActionById = { id: string };

export type UpdateMemoryValue = {
  memoryId: string;
  actionId: string;
  value: unknown;
};

export type DeleteMemoryValue = {
  memoryId: string;
  actionId: string;
};
