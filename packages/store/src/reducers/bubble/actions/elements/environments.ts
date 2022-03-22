import { getBubble } from '..'
import { bubbleActions } from '../..'
import { store } from '../../../../store'
import type { EnvironmentElementListItem } from '../../types'

export const addEnvironmentInList = (
  EnvironmentElementListItem: EnvironmentElementListItem
): void => {
  store.dispatch(bubbleActions.addEnvironmentInList(EnvironmentElementListItem))
  store.dispatch(bubbleActions.sortEnvironmentsInList())
  store.dispatch(bubbleActions.transferEnvironmentInListToCurrent())
}

export const removeEnvironmentInList = ({ id }: { id: string }): void => {
  store.dispatch(bubbleActions.removeEnvironmentInList({ id }))
  store.dispatch(bubbleActions.sortEnvironmentsInList())
  store.dispatch(bubbleActions.transferEnvironmentInListToCurrent())
}

export const resetEnvironment = (): void => {
  store.dispatch(bubbleActions.resetEnvironment())
  store.dispatch(bubbleActions.transferEnvironmentInListToCurrent())
}

export const setCurrentEnvironment = ({ id }: { id: string }): void => {
  const {
    elements: {
      environment: { list: environmentList },
    },
  } = getBubble()

  const environment = environmentList.find((item) => item.id === id)

  if (!environment) {
    return
  }
  store.dispatch(bubbleActions.setCurrentEnvironment(environment))
  store.dispatch(bubbleActions.removeEnvironmentInList({ id }))
}

export const resetCurrentEnvironment = (): void => {
  store.dispatch(bubbleActions.resetCurrentEnvironment())
  store.dispatch(bubbleActions.transferEnvironmentInListToCurrent())
}

export const removeEnvironmentAllOver = ({ id }: { id: string }): void => {
  removeEnvironmentInList({ id })
  resetCurrentEnvironment()
  store.dispatch(bubbleActions.transferEnvironmentInListToCurrent())
}
