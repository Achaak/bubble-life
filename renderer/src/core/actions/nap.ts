import { Action } from '../action'
import { BubbleConfig } from '@configs/bubble'
import { addActionInAwaitList, hasAction } from '@src/redux/reducers/actions/actions'
import { bubbleActions } from '@src/redux/reducers/bubble'
import { store } from '@src/redux/store'
import { Action as ActionType } from '@src/types/action'
import { dateToMs, random } from '@src/utils'
import dayjs from 'dayjs'

const TIREDNESS_INCREASE_DELAY = dateToMs({ seconds: 1 })

export class Action_nap extends Action {
  lastRenderUpdateNap: number
  recoverValue: number

  constructor() {
    super()

    this.lastRenderUpdateNap = 0
    this.recoverValue = 0

    this.name = 'nap'
    this.actions = [
      {
        name: 'nap:start',
        function: this.handleStartNap,
      },
      {
        name: 'nap:update',
        function: this.handleUpdateNap,
      },
      {
        name: 'nap:end',
        function: this.handleEndNap,
      },
      {
        name: 'nap:cancel',
        function: this.handleCancelNap,
      },
    ]
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) return

    if (store.getState().bubble.vitals.tiredness <= 0 && !hasAction({ name: 'nap' })) {
      const startNap = dayjs()

      const endNap = dayjs(startNap).add(
        BubbleConfig.actions.nap.duration +
          random({
            min: BubbleConfig.actions.nap.durationMargin * -1,
            max: BubbleConfig.actions.nap.durationMargin,
            round: true,
          }),
        'minute'
      )

      addActionInAwaitList({
        name: 'nap',
        start: startNap.valueOf(),
        duration: endNap.valueOf() - startNap.valueOf(),
        startFunction: 'nap:start',
        endFunction: 'nap:end',
        updateFunction: 'nap:update',
        cancelFunction: 'nap:cancel',
        elements: {
          eyes: {
            name: 'sleep',
          },
          onomatopoeia: {
            name: 'sleep',
          },
        },
        importance: 2,
      })
    }

    this.lastRender = timestamp
  }

  initNapRecoverValue = (): void => {
    this.recoverValue =
      BubbleConfig.actions.nap.recover +
      random({
        min: BubbleConfig.actions.nap.recoverMargin * -1,
        max: BubbleConfig.actions.nap.recoverMargin,
        round: true,
      })
  }

  getTirednessPerSecond = (action: ActionType): number => {
    const timestamp = Date.now()

    // Get tiredness missing
    const tirednessMissing =
      BubbleConfig.vitals.tiredness.max * this.recoverValue -
      store.getState().bubble.vitals.tiredness

    return (
      tirednessMissing / ((action.start + action.duration - timestamp) / TIREDNESS_INCREASE_DELAY)
    )
  }

  handleStartNap = (): void => {
    // Init recover value
    this.initNapRecoverValue()
  }

  handleUpdateNap = (action: ActionType): void => {
    const timestamp = Date.now()
    if (timestamp - this.lastRenderUpdateNap < TIREDNESS_INCREASE_DELAY) return

    // Init recover value
    if (!this.recoverValue) this.initNapRecoverValue()

    store.dispatch(bubbleActions.addTiredness(this.getTirednessPerSecond(action)))

    this.lastRenderUpdateNap = timestamp
  }

  handleEndNap = (): void => {
    // Reset recover value
    this.recoverValue = 0
  }

  handleCancelNap = (): void => {
    // Reset recover value
    this.recoverValue = 0
  }
}
