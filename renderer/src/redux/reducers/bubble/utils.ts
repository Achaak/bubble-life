import { addAnimationInListAction, removeAnimationInListAction, sortAnimationAction } from '.'
import { store } from '@src/redux/store'
import { Animation } from '@src/types/animation'

export const addAnimationInList = ({ animation }: { animation: Animation }): void => {
  console.log(animation)
  store.dispatch(addAnimationInListAction({ animation }))
  store.dispatch(sortAnimationAction())
}

export const removeAnimationInList = ({ id }: { id: string }): void => {
  store.dispatch(removeAnimationInListAction({ id }))
  store.dispatch(sortAnimationAction())
}
