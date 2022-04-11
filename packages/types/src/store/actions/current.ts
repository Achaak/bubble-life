import type { Action } from '@/src/action'

export type SetCurrentAction = Action

export type HasActionInCurrentByName = { name: string }

export type HasActionInCurrentById = { id: string }
