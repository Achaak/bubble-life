import type { Action } from '../../index.js';

export type SetCurrentAction = Action;

export type HasActionInCurrentByName = { name: string };

export type HasActionInCurrentById = { id: string };
