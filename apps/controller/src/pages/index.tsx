import { LayoutDefault } from '@/components/layouts/default'
import type { ClientToServerEvents, ServerToClientEvents } from '@bubble/types'
import { Button } from '@bubble/ui'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'

import type { NextPageWithLayout } from './_app'

const Auth: NextPageWithLayout = () => {
  const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>()

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

  const handleClick2 = (): void => {
    socket?.emit('hello')
  }

  return (
    <>
      <Button onClick={handleClick}>Connect</Button>
      <Button onClick={handleClick2}>Hello</Button>
    </>
  )
}

Auth.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default Auth
