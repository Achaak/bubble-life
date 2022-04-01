import { LayoutDefault } from '@/components/layouts/default'
import type { ClientToServerEvents, ServerToClientEvents } from '@bubble/types'
import { Button } from '@bubble/ui'
import React, { useEffect, useState } from 'react'
import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'

import type { NextPageWithLayout } from './_app'

const Auth: NextPageWithLayout = () => {
  const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>()

  useEffect(() => {
    setSocket(io('http://localhost:4000', { autoConnect: false }))
  }, [])

  const handleClick = (): void => {
    console.log('clicked')

    if (socket) {
      socket.auth = { username: 'test' }
    }
    socket?.connect()

    socket?.on('hello', () => {
      console.log('hello')
    })
  }

  const handleClick2 = (): void => {
    socket?.emit('hello')
  }

  return (
    <>
      <Button onClick={handleClick}>Test</Button>
      <Button onClick={handleClick2}>Test</Button>
    </>
  )
}

Auth.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default Auth
