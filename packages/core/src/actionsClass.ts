import {
  getActions,
  removeActionFromAwaitList,
  removeActionFromCancelList,
  resetActionAnimation,
  resetActionBody,
  resetActionClothe,
  resetActionEnvironment,
  resetActionEyes,
  resetActionHat,
  resetActionOnomatopoeia,
  resetCurrentAction,
  setActionAnimation,
  setActionBody,
  setActionClothe,
  setActionEnvironment,
  setActionEyes,
  setActionHat,
  setActionOnomatopoeia,
  setCurrentAction,
} from '@bubble/store'
import type { Action as ActionType } from '@bubble/types'
import dayjs from 'dayjs'
import shortid from 'shortid'

import type { Action } from './action'
import { ActionsList } from './actions'

export class Actions {
  actions: {
    name: string
    class: Action
  }[]

  constructor() {
    this.actions = []

    this.initActionsList()
  }

  initActionsList = (): void => {
    for (const A of ActionsList) {
      const a = new A()

      this.actions.push({
        name: a.name,
        class: a,
      })
    }
  }

  update = (timestamp: number): void => {
    const { waitList, current, cancelList } = getActions()

    // CHECK CANCEL ACTIONS
    if (cancelList.length > 0 || current) {
      this.checkCancelList()
    }

    // UPDATE ACTIONS
    for (const action of this.actions) {
      action.class.update(timestamp)
    }

    // CHECK AWAIT ACTIONS
    if (waitList.length > 0 || !!current) {
      this.checkAwaitList()
    }
  }

  triggerActionFunction = ({
    actionName,
    functionName,
    action,
  }: {
    actionName: string
    functionName: string
    action: ActionType
  }): void => {
    const a = this.actions.find((item) => item.name === actionName)

    if (!a) {
      return
    }

    const f = a.class.actions.find((item) => item.name === functionName)

    if (!f) {
      return
    }

    f.function(action)
  }

  onStartAction = (): void => {
    const { waitList } = getActions()
    const waitListItem = waitList[0]
    const newAction: ActionType = {
      ...waitListItem,
      start: dayjs().valueOf(),
      id: waitListItem.id || shortid(),
      elements: {
        ...(waitListItem.elements?.body
          ? {
              body: {
                id: shortid(),
                ...waitListItem.elements.body,
              },
            }
          : {}),
        ...(waitListItem.elements?.clothe
          ? {
              clothe: {
                id: shortid(),
                ...waitListItem.elements.clothe,
              },
            }
          : {}),
        ...(waitListItem.elements?.eyes
          ? {
              eyes: {
                id: shortid(),
                ...waitListItem.elements.eyes,
              },
            }
          : {}),
        ...(waitListItem.elements?.hat
          ? {
              hat: {
                id: shortid(),
                ...waitListItem.elements.hat,
              },
            }
          : {}),
        ...(waitListItem.elements?.environment
          ? {
              environment: {
                id: shortid(),
                ...waitListItem.elements.environment,
              },
            }
          : {}),
        ...(waitListItem.elements?.onomatopoeia
          ? {
              onomatopoeia: {
                id: shortid(),
                ...waitListItem.elements.onomatopoeia,
              },
            }
          : {}),
      },
      ...(waitListItem.animation
        ? {
            animation: {
              id: shortid(),
              ...waitListItem.animation,
            },
          }
        : {}),
    }

    // Add new current action
    setCurrentAction(newAction)

    // Remove action in list
    if (newAction.id) {
      removeActionFromAwaitList({
        id: newAction.id,
      })
    }

    // Start function
    if (newAction.startFunction) {
      this.triggerActionFunction({
        action: newAction,
        actionName: newAction.name,
        functionName: newAction.startFunction,
      })
    }

    // Add elements
    // EYES
    if (newAction.elements?.eyes?.id) {
      setActionEyes({
        actionId: newAction.id || '',
        name: newAction.elements.eyes.name,
      })
    }
    // ENVIRONMENT
    if (newAction.elements?.environment?.id) {
      setActionEnvironment({
        actionId: newAction.id || '',
        name: newAction.elements.environment.name,
      })
    }
    // CLOTHE
    if (newAction.elements?.clothe?.id) {
      setActionClothe({
        actionId: newAction.id || '',
        name: newAction.elements.clothe.name,
      })
    }
    // HAT
    if (newAction.elements?.hat?.id) {
      setActionHat({
        actionId: newAction.id || '',
        name: newAction.elements.hat.name,
      })
    }
    // BODY
    if (newAction.elements?.body?.id) {
      setActionBody({
        actionId: newAction.id || '',
        name: newAction.elements.body.name,
      })
    }
    // ONOMATOPOEIA
    if (newAction.elements?.onomatopoeia?.id) {
      setActionOnomatopoeia({
        actionId: newAction.elements.onomatopoeia.id,
        name: newAction.elements.onomatopoeia.name,
      })
    }

    // Add animation
    if (newAction.animation?.id) {
      setActionAnimation({
        actionId: newAction.animation.id,
        name: newAction.animation.name,
      })
    }

    console.log('[Start action]', newAction.name)
  }

  onUpdateAction = (): void => {
    const { current } = getActions()

    if (!current) {
      return
    }

    if (current.updateFunction) {
      // Update function
      this.triggerActionFunction({
        action: current,
        actionName: current.name,
        functionName: current.updateFunction,
      })
    }
  }

  onEndAction = (): void => {
    const { current } = getActions()

    if (!current) {
      return
    }

    // End function
    if (current.endFunction) {
      this.triggerActionFunction({
        action: current,
        actionName: current.name,
        functionName: current.endFunction,
      })
    }

    // Remove element
    this.onRemoveElement(current)

    // Remove animation
    this.onRemoveAnimation(current)

    console.log('[End action]', current.name)

    // Remove current action
    resetCurrentAction()
  }

  onCancelAction = (): void => {
    const { cancelList } = getActions()
    const cancelAction = { ...cancelList[0] }

    if (!cancelAction) {
      return
    }

    // End function
    if (cancelAction.cancelFunction) {
      this.triggerActionFunction({
        action: cancelAction,
        actionName: cancelAction.name,
        functionName: cancelAction.cancelFunction,
      })
    }

    if (cancelAction.id) {
      // Remove cancel action
      removeActionFromCancelList({ id: cancelAction.id })
    }

    // Remove element
    this.onRemoveElement(cancelAction)

    // Remove animation
    this.onRemoveAnimation(cancelAction)

    console.log('[Cancel action]', cancelAction.name)
  }

  onRemoveElement = (action: ActionType): void => {
    // EYES
    if (action.elements?.eyes?.id) {
      resetActionEyes()
    }
    // ENVIRONMENT
    if (action.elements?.environment?.id) {
      resetActionEnvironment()
    }
    // CLOTHE
    if (action.elements?.clothe?.id) {
      resetActionClothe()
    }
    // HAT
    if (action.elements?.hat?.id) {
      resetActionHat()
    }
    // BODY
    if (action.elements?.body?.id) {
      resetActionBody()
    }
    // ONOMATOPOEIA
    if (action.elements?.onomatopoeia?.id) {
      resetActionOnomatopoeia()
    }
  }

  onRemoveAnimation = (action: ActionType): void => {
    if (action.animation?.id) {
      resetActionAnimation()
    }
  }

  checkAwaitList = (): void => {
    const currentDate = dayjs().valueOf()

    const { current, waitList } = getActions()

    // Verif current action
    if (current) {
      if (current.start + current.duration < currentDate) {
        this.onEndAction()
      } else {
        this.onUpdateAction()
      }
    } else if (waitList.length > 0) {
      const newAction = waitList[0]

      if (newAction && newAction.start <= currentDate) {
        this.onStartAction()
      }
    }
  }

  checkCancelList = (): void => {
    const { cancelList } = getActions()

    if (cancelList.length > 0) {
      this.onCancelAction()
    }
  }
}
