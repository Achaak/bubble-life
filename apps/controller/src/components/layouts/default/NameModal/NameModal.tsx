import { SocketContext } from '@/components/components/SocketProvider'
import { setCurrentUser, useAppSelector } from '@bubble/store'
import { selectCurrentUser } from '@bubble/store'
import { styled } from '@bubble/styles'
import { Button, Textfield } from '@bubble/ui'
import React, { useContext, useState } from 'react'

const Container = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$BLACK',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.3s ease-in-out',

  variants: {
    visible: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
    },
  },
})

export const NameModal: React.FC = () => {
  const [name, setName] = useState<string>()
  const socket = useContext(SocketContext)
  const currentUser = useAppSelector(selectCurrentUser)

  console.log(currentUser)
  const handleConnect = (): void => {
    if (!name) {
      return
    }

    socket?.emit('newUser', { name: name })

    console.log("emit 'newUser'")
    // Set in store
    setCurrentUser({
      name: name,
    })
  }

  return (
    <Container visible={!currentUser}>
      <Textfield
        onChange={(e): void => {
          setName(e.target.value)
        }}
      />

      <Button onClick={handleConnect} disabled={!name}>
        Validate
      </Button>
    </Container>
  )
}
