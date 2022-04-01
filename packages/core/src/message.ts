import { io } from 'socket.io-client'
import type { ClientToServerEvents, ServerToClientEvents } from '@bubble/types'
import type { Socket } from 'socket.io-client'
import dayjs from 'dayjs'
import {
  addMessageInWaitingList,
  getBubble,
  resetCurrentMessage,
  transferMessageFromWaitingListToCurrent,
} from '@bubble/store'
import shortid from 'shortid'

export class Message {
  lastRender: number

  socket?: Socket<ServerToClientEvents, ClientToServerEvents>

  constructor() {
    this.lastRender = 0

    this.socket = io('http://localhost:4000')

    this.socket.on('newConnection', ({ name }) => {
      console.log('newConnection', name)
      addMessageInWaitingList({
        content: `Hello ${name} !`,
        duration: 5000,
        importance: 1,
        start: dayjs().valueOf(),
        id: shortid(),
      })
    })
  }

  update = (): void => {
    const {
      message: { waitingList, current },
    } = getBubble()

    // CHECK AWAIT ACTIONS
    if (waitingList.length > 0 || !!current) {
      this.checkWaitingList()
    }
  }

  onStartMessage = (): void => {
    const {
      message: { waitingList },
    } = getBubble()
    const waitingListItem = waitingList[0]

    // Add new current message
    transferMessageFromWaitingListToCurrent({ id: waitingListItem.id || shortid() })

    console.log('[Start message]', waitingListItem.content)
  }

  checkWaitingList = (): void => {
    const currentDate = dayjs().valueOf()

    const {
      message: { current, waitingList },
    } = getBubble()

    // Verif current message
    if (current) {
      if (current.start + current.duration < currentDate) {
        this.onEndMessage()
      }
    } else if (waitingList.length > 0) {
      const newAction = waitingList[0]

      if (newAction && newAction.start <= currentDate) {
        this.onStartMessage()
      }
    }
  }

  onEndMessage = (): void => {
    const {
      message: { current },
    } = getBubble()

    if (!current) {
      return
    }

    console.log('[End message]', current.content)

    // Remove current message
    resetCurrentMessage()
  }
}
