import { ActionEat } from './eat.js'
import { ActionNap } from './nap.js'
import { ActionPlay } from './play.js'
import { ActionShopping } from './shopping.js'
import { ActionSleep } from './sleep.js'

export * from './eat.js'
export * from './nap.js'
export * from './play.js'
export * from './shopping.js'
export * from './sleep.js'

export const ActionsList = [ActionEat, ActionSleep, ActionNap, ActionShopping, ActionPlay]
