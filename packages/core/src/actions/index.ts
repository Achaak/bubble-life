import { ActionEat } from './eat'
import { ActionNap } from './nap'
import { ActionPlay } from './play'
import { ActionShopping } from './shopping'
import { ActionSleep } from './sleep'

export * from './eat'
export * from './nap'
export * from './play'
export * from './shopping'
export * from './sleep'

export const ActionsList = [ActionEat, ActionSleep, ActionNap, ActionShopping, ActionPlay]
