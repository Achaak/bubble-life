import { Action } from './action'
import { ActionsList } from './actions'
import { addcurrentAction, resetcurrentAction } from '@src/redux/reducers/actions'
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
    const { list, current } = store.getState().actions

    // ACTIONS
    for (const action of this.actions) {
      action.class.update(timestamp)
    }

    // ACTIONS
    if (list.length > 0 || !!current) {
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

    const { current, list } = store.getState().actions

    // Verif current action
    if (current) {
      if (current.start + current.duration < currentDate) {
        console.log('[End action]', current.name)

        // End function
        this.triggerActionFunction({
          action: current,
          actionName: current.name,
          functionName: current.endFunction,
        })

        // Remove current action
        store.dispatch(resetcurrentAction())
      } else {
        // Update function
        this.triggerActionFunction({
          action: current,
          actionName: current.name,
          functionName: current.updateFunction,
        })
      }
    } else if (list.length > 0) {
      const newAction = list[0]

      if (newAction && newAction.start <= currentDate) {
        // Add new current action
        store.dispatch(
          addcurrentAction({
            action: {
              ...newAction,
              start: dayjs().valueOf(),
            },
          })
        )

        // Start function
        this.triggerActionFunction({
          action: current,
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
