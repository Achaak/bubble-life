import { Action } from './action'
import { ActionsList } from './actions'
import { addCurrentActionAction, resetCurrentActionAction } from '@src/redux/reducers/actions'
import { removeActionInList } from '@src/redux/reducers/actions/utils'
import { store } from '@src/redux/store'
import { Action as ActionType } from '@src/types/action'
import dayjs from 'dayjs'

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
    const { actionList, currentAction } = store.getState().actions

    // ACTIONS
    for (const action of this.actions) {
      action.class.update(timestamp)
    }

    // ACTIONS
    if (actionList.length > 0 || !!currentAction) {
      this.checkAction()
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

  checkAction = (): void => {
    const currentDate = dayjs().valueOf()

    const { currentAction, actionList } = store.getState().actions

    // Verif current action
    if (currentAction) {
      if (currentAction.start + currentAction.duration < currentDate) {
        console.log('[End action]', currentAction.name)

        // End function
        this.triggerActionFunction({
          action: currentAction,
          actionName: currentAction.name,
          functionName: currentAction.endFunction,
        })

        // Remove current action
        store.dispatch(resetCurrentActionAction())
      } else {
        // Update function
        this.triggerActionFunction({
          action: currentAction,
          actionName: currentAction.name,
          functionName: currentAction.updateFunction,
        })
      }
    } else if (actionList.length > 0) {
      const newAction = actionList[0]

      if (newAction && newAction.start <= currentDate) {
        // Add new current action
        store.dispatch(
          addCurrentActionAction({
            action: {
              ...newAction,
              start: dayjs().valueOf(),
            },
          })
        )

        // Start function
        this.triggerActionFunction({
          action: currentAction,
          actionName: newAction.name,
          functionName: newAction.startFunction,
        })

        removeActionInList({
          id: newAction.id,
        })

        console.log('[Start action]', newAction.name)
      }
    }
  }
}
