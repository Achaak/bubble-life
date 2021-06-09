import { useOvermind } from '@/store'
import { styled } from '@/styles'
import React from 'react'
import { BodyDefault } from './Default'

const Container = styled('div', {
  position: 'relative',
})

export const Bodies: React.FC = ({ children }) => {
  const { state } = useOvermind()
  const { body } = state.bubble

  const getBody = (): React.ReactNode => {
    switch (body) {
      case 'default':
        return <BodyDefault />

      default:
        return null
    }
  }

  return (
    <Container>
      {getBody()}
      {children}
    </Container>
  )
}
