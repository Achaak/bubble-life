import { LayoutDefault } from '@/components/layouts/default'
import type { ClientToServerEvents, ServerToClientEvents } from '@bubble/types'
import { Button, Textarea } from '@bubble/ui'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'

import type { NextPageWithLayout } from './_app'

const Auth: NextPageWithLayout = () => {
  const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>()
  const [messageValue, setMessageValue] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    setSocket(io(`${window.location.hostname}:4000`, { autoConnect: false }))
  }, [])

  const handleClick = (): void => {
    console.log('clicked')

    if (socket) {
      socket.auth = { name: 'test' }
    }
    socket?.connect()
  }

  const sendMessage = (): void => {
    socket?.emit('message', { content: messageValue })
  }

  return (
    <>
      <Button onClick={handleClick}>Connect</Button>
      <Textarea onChange={(e): void => setMessageValue(e.target.value)} />
      <Button onClick={sendMessage}>Send Message</Button>
    </>
  )
}

Auth.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default Auth
