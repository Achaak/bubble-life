import { dateToMs, socket } from '@bubble/common'
import { random } from '@bubble/common'
import { BubbleConfig } from '@bubble/configs'
import {
  addActionInWaitingList,
  addTiredness,
  getBubble,
  hasActionByName,
  updateMemoryValue,
} from '@bubble/store'
import type { Action as ActionType, SocketEvents, AddSleepActionInWaitingList } from '@bubble/types'
import dayjs from 'dayjs'

import { Action } from '../action.js'

const TIREDNESS_INCREASE_DELAY = dateToMs({ seconds: 1 })

export const addSleepActionInWaitingList = ({
  start,
  duration,
  importance,
}: AddSleepActionInWaitingList): void => {
  addActionInWaitingList({
    name: 'sleep',
    start: start,
    duration: duration,
    startFunction: 'sleep:start',
    endFunction: 'sleep:end',
    updateFunction: 'sleep:update',
    cancelFunction: 'sleep:cancel',
    elements: {
      eyes: {
        name: 'sleep',
      },
      onomatopoeia: {
        name: 'sleep',
      },
    },
    importance: importance,
  })
}

export const addSleepActionInWaitingListDefault = (): void => {
  const startSleep = dayjs()
  const endSleep = dayjs(startSleep).add(
    BubbleConfig.actions.sleep.duration +
      random({
        min: BubbleConfig.actions.sleep.durationMargin * -1,
        max: BubbleConfig.actions.sleep.durationMargin,
        round: true,
      }),
    'minute'
  )

  addSleepActionInWaitingList({
    start: startSleep.valueOf(),
    duration: endSleep.valueOf() - startSleep.valueOf(),
    importance: 2,
  })
}

export class ActionSleep extends Action {
  lastRenderUpdateSleep: number

  socket?: SocketEvents

  constructor() {
    super()

    this.lastRenderUpdateSleep = 0

    this.name = 'sleep'
    this.actions = [
      {
        name: 'sleep:start',
        function: this.handleStartSleep,
      },
      {
        name: 'sleep:update',
        function: this.handleUpdateSleep,
      },
      {
        name: 'sleep:end',
        function: this.handleEndSleep,
      },
      {
        name: 'sleep:cancel',
        function: this.handleCancelSleep,
      },
    ]

    this.socket = socket({
      localhost: true,
    })

    this.socket.on('addSleepActionInWaitingList', addSleepActionInWaitingList)
    this.socket.on('addSleepActionInWaitingListDefault', addSleepActionInWaitingListDefault)
  }

  update = (timestamp: number): void => {
    if (timestamp - this.lastRender < dateToMs({ seconds: 1 })) {
      return
    }

    if (!hasActionByName({ name: 'sleep' })) {
      const hourStart = parseInt(BubbleConfig.actions.sleep.startAt.split(':')[0]) || 0
      const minuteStart = parseInt(BubbleConfig.actions.sleep.startAt.split(':')[1]) || 0

      const currentDate = dayjs()

      let startSleep = dayjs(
        new Date(
          currentDate.year(),
          currentDate.month(),
          currentDate.date(),
          hourStart,
          random({
            min: minuteStart + BubbleConfig.actions.sleep.durationMargin,
            max: minuteStart - BubbleConfig.actions.sleep.durationMargin,
            round: true,
          }),
          0
        )
      )

      if (currentDate.valueOf() > startSleep.valueOf()) {
        startSleep = startSleep.add(1, 'day')
      }

      const endSleep = dayjs(startSleep).add(
        BubbleConfig.actions.sleep.duration +
          random({
            min: BubbleConfig.actions.sleep.durationMargin * -1,
            max: BubbleConfig.actions.sleep.durationMargin,
            round: true,
          }),
        'minute'
      )

      addSleepActionInWaitingList({
        start: startSleep.valueOf(),
        duration: endSleep.valueOf() - startSleep.valueOf(),
        importance: 2,
      })
    }

    this.lastRender = timestamp
  }

  getTirednessPerSecond = (action: ActionType): number => {
    const {
      vitals: { tiredness },
    } = getBubble()

    const timestamp = Date.now()

    const tirednessEnd = action.memory?.tirednessEnd as number

    // Get time left
    const actionEnd = action.start + action.duration
    const timeLeft = (actionEnd - timestamp) / TIREDNESS_INCREASE_DELAY

    // Get tiredness missing
    const tirednessMissing = tirednessEnd - tiredness

    // Get tiredness per second
    const tirednessPerSecond = tirednessMissing / timeLeft

    return tirednessPerSecond
  }

  handleStartSleep = (action: ActionType): void => {
    const {
      vitals: { tiredness },
    } = getBubble()

    const recoverValue =
      (action.memory?.recoverValue as number | undefined) ||
      BubbleConfig.actions.sleep.recover +
        random({
          min: BubbleConfig.actions.sleep.recoverMargin * -1,
          max: BubbleConfig.actions.sleep.recoverMargin,
          round: false,
        })

    const tirednessEnd = tiredness + BubbleConfig.vitals.tiredness.max * recoverValue

    if (action.id) {
      updateMemoryValue({
        actionId: action.id,
        memoryId: 'tirednessEnd',
        value:
          tirednessEnd > BubbleConfig.vitals.tiredness.max
            ? BubbleConfig.vitals.tiredness.max
            : tirednessEnd,
      })
    }
  }

  handleUpdateSleep = (action: ActionType): void => {
    const timestamp = Date.now()
    if (timestamp - this.lastRenderUpdateSleep < TIREDNESS_INCREASE_DELAY) {
      return
    }

    addTiredness({
      value: this.getTirednessPerSecond(action),
    })

    this.lastRenderUpdateSleep = timestamp
  }

  handleEndSleep = (): void => {
    // NOTHING
  }

  handleCancelSleep = (): void => {
    // NOTHING
  }
}
