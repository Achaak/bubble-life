import type { Action as ActionType } from '@bubble/types/src/action'
import { addActionInAwaitList, hasAction } from '@src/redux/reducers/actions/actions'
import { dateToMs } from '@src/utils/date'
import { Action } from '../action'

// const SATURATION_INCREASE_DELAY = dateToMs({ seconds: 1 })

export const addPlayActionInAwaitList = ({
  start,
  duration,
  importance,
}: {
  start: number
  duration: number
  importance: 1 | 2 | 3
}): void => {
  addActionInAwaitList({
    name: 'play',
    start: start,
    duration: duration,
    startFunction: 'play:start',
    updateFunction: 'play:update',
    endFunction: 'play:end',
    cancelFunction: 'play:cancel',
    importance: importance,
    animation: {
      name: 'bounce',
    },
  })
}

export class ActionPlay extends Action {
  lastRenderUpdatePlay: number

  constructor() {
    super()

    this.lastRenderUpdatePlay = 0

    this.name = 'play'
    this.actions = [
      {
        name: 'play:start',
        function: this.handleStartPlay,
      },
      {
        name: 'play:update',
        function: this.handleUpdatePlay,
      },
      {
        name: 'play:end',
        function: this.handleEndPlay,
      },
      {
        name: 'play:cancel',
        function: this.handleCancelPlay,
      },
    ]
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    if (/*store.getState().bubble.vitals.saturation <= 0 &&*/ !hasAction({ name: 'play' })) {
      // const startPlay = dayjs()
      // const endPlay = dayjs(startPlay).add(
      //   BubbleConfig.actions.play.duration +
      //     random({
      //       min: BubbleConfig.actions.play.durationMargin * -1,
      //       max: BubbleConfig.actions.play.durationMargin,
      //       round: true,
      //     }),
      //   'minute'
      // )
      // addPlayActionInAwaitList({
      //   start: startPlay.valueOf(),
      //   duration: endPlay.valueOf() - startPlay.valueOf(),
      //   importance: 2,
      // })
    }

    this.lastRender = timestamp
  }

  handleStartPlay = (): void => {
    // NOTHING
  }

  handleUpdatePlay = (action: ActionType): void => {
    const timestamp = Date.now()

    // NOTHING
    //console.log(action)

    this.lastRenderUpdatePlay = timestamp
  }

  handleEndPlay = (): void => {
    // NOTHING
  }

  handleCancelPlay = (): void => {
    // NOTHING
  }
}
