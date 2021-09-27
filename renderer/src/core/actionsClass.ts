import { Action } from './action'
import { ActionsList } from './actions'
import {
  setCurrentActionAction,
  resetCurrentActionAction,
  updateCurrentActionElementEyesAction,
  updateCurrentActionElementOnomatopoeiaAction,
  updateCurrentActionElementEnvironmentAction,
  updateCurrentActionElementClotheAction,
  updateCurrentActionElementHatAction,
  updateCurrentActionElementBodyAction,
  updateCurrentActionAnimationAction,
} from '@src/redux/reducers/actions'
import {
  removeActionInAwaitList,
  removeActionInCancelList,
} from '@src/redux/reducers/actions/utils'
import {
  addAnimationInList,
  addBodyInList,
  addClotheInList,
  addEnvironmentInList,
  addEyesInList,
  addHatInList,
  addOnomatopoeiaInList,
  removeAnimationAllOver,
  removeBodyAllOver,
  removeClotheAllOver,
  removeEnvironmentAllOver,
  removeEyesAllOver,
  removeHatAllOver,
  removeOnomatopoeiaAllOver,
} from '@src/redux/reducers/bubble/utils'
import { store } from '@src/redux/store'
import { Action as ActionType } from '@src/types/action'
import dayjs from 'dayjs'
import shortid from 'shortid'

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
    for (const _Action of ActionsList) {
      const _action = new _Action()

      this.actions.push({
        name: _action.name,
        class: _action,
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
    const _action = this.actions.find((item) => item.name === actionName)

    if (!_action) return

    const _function = _action.class.actions.find((item) => item.name === functionName)

    if (!_function) return

    _function.function(action)
  }

  onStartAction = (): void => {
    const { waitList } = store.getState().actions
    const newAction = { ...waitList[0] }

    // Add new current action
    store.dispatch(
      setCurrentActionAction({
        ...newAction,
        start: dayjs().valueOf(),
      })
    )

    // Remove action in list
    removeActionInAwaitList({
      id: newAction.id,
    })

    // Start function
    this.triggerActionFunction({
      action: newAction,
      actionName: newAction.name,
      functionName: newAction.startFunction,
    })

    // Add elements
    // EYES
    if (newAction.elements.eyes) {
      const id = shortid()

      addEyesInList({
        id,
        importance: 1,
        name: newAction.elements.eyes.name,
      })
      store.dispatch(
        updateCurrentActionElementEyesAction({
          id,
          name: newAction.elements.eyes.name,
        })
      )
    }
    // ENVIRONMENT
    if (newAction.elements.environment) {
      const id = shortid()

      addEnvironmentInList({
        id,
        importance: 1,
        name: newAction.elements.environment.name,
      })
      store.dispatch(
        updateCurrentActionElementEnvironmentAction({
          id,
          name: newAction.elements.environment.name,
        })
      )
    }
    // CLOTHE
    if (newAction.elements.clothe) {
      const id = shortid()

      addClotheInList({
        id,
        importance: 1,
        name: newAction.elements.clothe.name,
      })
      store.dispatch(
        updateCurrentActionElementClotheAction({
          id,
          name: newAction.elements.clothe.name,
        })
      )
    }
    // HAT
    if (newAction.elements.hat) {
      const id = shortid()

      addHatInList({
        id,
        importance: 1,
        name: newAction.elements.hat.name,
      })
      store.dispatch(
        updateCurrentActionElementHatAction({
          id,
          name: newAction.elements.hat.name,
        })
      )
    }
    // BODY
    if (newAction.elements.body) {
      const id = shortid()

      addBodyInList({
        id,
        importance: 1,
        name: newAction.elements.body.name,
      })
      store.dispatch(
        updateCurrentActionElementBodyAction({
          id,
          name: newAction.elements.body.name,
        })
      )
    }
    // ONOMATOPOEIA
    if (newAction.elements.onomatopoeia) {
      const id = shortid()

      addOnomatopoeiaInList({
        id,
        importance: 1,
        name: newAction.elements.onomatopoeia.name,
      })
      store.dispatch(
        updateCurrentActionElementOnomatopoeiaAction({
          id,
          name: newAction.elements.onomatopoeia.name,
        })
      )
    }

    // Add animation
    if (newAction.animation) {
      const id = shortid()

      addAnimationInList({
        id,
        importance: 1,
        name: newAction.animation.name,
      })
      store.dispatch(
        updateCurrentActionAnimationAction({
          id,
          name: newAction.animation.name,
        })
      )
    }

    console.log('[Start action]', newAction.name)
  }

  onUpdateAction = (): void => {
    const { current } = store.getState().actions

    // Update function
    this.triggerActionFunction({
      action: current,
      actionName: current.name,
      functionName: current.updateFunction,
    })
  }

  onEndAction = (): void => {
    const { current } = store.getState().actions

    // End function
    this.triggerActionFunction({
      action: current,
      actionName: current.name,
      functionName: current.endFunction,
    })

    // Remove element
    this.onRemoveElement(current)

    // Remove animation
    this.onRemoveAnimation(current)

    console.log('[End action]', current.name)

    // Remove current action
    store.dispatch(resetCurrentActionAction())
  }

  onCancelAction = (): void => {
    const { cancelList } = store.getState().actions
    const cancelAction = { ...cancelList[0] }

    // End function
    this.triggerActionFunction({
      action: cancelAction,
      actionName: cancelAction.name,
      functionName: cancelAction.cancelFunction,
    })

    // Remove cancel action
    removeActionInCancelList({ id: cancelAction.id })

    // Remove element
    this.onRemoveElement(cancelAction)

    // Remove animation
    this.onRemoveAnimation(cancelAction)

    console.log('[Cancel action]', cancelAction.name)
  }

  onRemoveElement = (action: ActionType): void => {
    // EYES
    if (action.elements.eyes) {
      removeEyesAllOver({
        id: action.elements.eyes.id,
      })
    }
    // ENVIRONMENT
    if (action.elements.environment) {
      removeEnvironmentAllOver({
        id: action.elements.environment.id,
      })
    }
    // CLOTHE
    if (action.elements.clothe) {
      removeClotheAllOver({
        id: action.elements.clothe.id,
      })
    }
    // HAT
    if (action.elements.hat) {
      removeHatAllOver({
        id: action.elements.hat.id,
      })
    }
    // BODY
    if (action.elements.body) {
      removeBodyAllOver({
        id: action.elements.body.id,
      })
    }
    // ONOMATOPOEIA
    if (action.elements.onomatopoeia) {
      removeOnomatopoeiaAllOver({
        id: action.elements.onomatopoeia.id,
      })
    }
  }

  onRemoveAnimation = (action: ActionType): void => {
    if (action.animation) {
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
