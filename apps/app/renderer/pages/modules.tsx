import type { ClientToServerEvents, ServerToClientEvents } from '@bubble/types'
import { Button } from '@bubble/ui'
import { DefaultLayout } from '@src/components/layouts/default'
import React, { useEffect, useState } from 'react'
import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'

import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>()

  useEffect(() => {
    setSocket(io('http://localhost:3000'))
  }, [])

  const handleClick = (): void => {
    console.log('clicked')
    socket?.emit('hello')

    socket?.on('hello', (data: string) => {
      console.log(data)
    })
  }

  return (
    <>
      <Button onClick={handleClick}>Test</Button>
    </>
  )
}

Home.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
