import {
  addAnimationInList,
  addBodyInList,
  addClotheInList,
  addEnvironmentInList,
  addEyesInList,
  addHatInList,
  addOnomatopoeiaInList,
  removeActionInAwaitList,
  removeActionInCancelList,
  removeAnimationAllOver,
  removeBodyAllOver,
  removeClotheAllOver,
  removeEnvironmentAllOver,
  removeEyesAllOver,
  removeHatAllOver,
  removeOnomatopoeiaAllOver,
} from '@bubble/store'
import { actionsActions } from '@bubble/store/src/reducers/actions'
import { store } from '@bubble/store/src/store'
import type { Action as ActionType } from '@bubble/types/src/action'
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
    const { waitList, current, cancelList } = store.getState().actions

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
    const { waitList } = store.getState().actions
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
    store.dispatch(
      actionsActions.setCurrentAction({
        ...newAction,
      })
    )

    // Remove action in list
    if (newAction.id) {
      removeActionInAwaitList({
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
      addEyesInList({
        id: newAction.elements.eyes.id,
        importance: 1,
        name: newAction.elements.eyes.name,
      })
    }
    // ENVIRONMENT
    if (newAction.elements?.environment?.id) {
      addEnvironmentInList({
        id: newAction.elements.environment.id,
        importance: 1,
        name: newAction.elements.environment.name,
      })
    }
    // CLOTHE
    if (newAction.elements?.clothe?.id) {
      addClotheInList({
        id: newAction.elements.clothe.id,
        importance: 1,
        name: newAction.elements.clothe.name,
      })
    }
    // HAT
    if (newAction.elements?.hat?.id) {
      addHatInList({
        id: newAction.elements.hat.id,
        importance: 1,
        name: newAction.elements.hat.name,
      })
    }
    // BODY
    if (newAction.elements?.body?.id) {
      addBodyInList({
        id: newAction.elements.body.id,
        importance: 1,
        name: newAction.elements.body.name,
      })
    }
    // ONOMATOPOEIA
    if (newAction.elements?.onomatopoeia?.id) {
      addOnomatopoeiaInList({
        id: newAction.elements.onomatopoeia.id,
        importance: 1,
        name: newAction.elements.onomatopoeia.name,
      })
    }

    // Add animation
    if (newAction.animation?.id) {
      addAnimationInList({
        id: newAction.animation.id,
        importance: 1,
        name: newAction.animation.name,
      })
    }

    console.log('[Start action]', newAction.name)
  }

  onUpdateAction = (): void => {
    const { current } = store.getState().actions

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
    const { current } = store.getState().actions

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
    store.dispatch(actionsActions.resetCurrentAction())
  }

  onCancelAction = (): void => {
    const { cancelList } = store.getState().actions
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
      removeActionInCancelList({ id: cancelAction.id })
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
      removeEyesAllOver({
        id: action.elements.eyes.id,
      })
    }
    // ENVIRONMENT
    if (action.elements?.environment?.id) {
      removeEnvironmentAllOver({
        id: action.elements.environment.id,
      })
    }
    // CLOTHE
    if (action.elements?.clothe?.id) {
      removeClotheAllOver({
        id: action.elements.clothe.id,
      })
    }
    // HAT
    if (action.elements?.hat?.id) {
      removeHatAllOver({
        id: action.elements.hat.id,
      })
    }
    // BODY
    if (action.elements?.body?.id) {
      removeBodyAllOver({
        id: action.elements.body.id,
      })
    }
    // ONOMATOPOEIA
    if (action.elements?.onomatopoeia?.id) {
      removeOnomatopoeiaAllOver({
        id: action.elements.onomatopoeia.id,
      })
    }
  }

  onRemoveAnimation = (action: ActionType): void => {
    if (action.animation?.id) {
      removeAnimationAllOver({
        id: action.animation.id,
      })
    }
  }

  checkAwaitList = (): void => {
    const currentDate = dayjs().valueOf()

    const { current, waitList } = store.getState().actions

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
    const { cancelList } = store.getState().actions

    if (cancelList.length > 0) {
      this.onCancelAction()
    }
  }
}
