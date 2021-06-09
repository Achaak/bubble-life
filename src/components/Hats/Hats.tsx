import { useOvermind } from '@/store'
import { styled } from '@/styles'
import React from 'react'
import { HatCap } from './Cap'

const Container = styled('div', {
  position: 'absolute',
  top: '0%',
  width: '100%',
  transform: 'translateY(-50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
})

export const Hats: React.FC = () => {
  const { state } = useOvermind()
  const { hat } = state.bubble

  const getHat = (): React.ReactNode => {
    switch (hat) {
      case 'cap':
        return <HatCap />

      default:
        return null
    }
  }

  return <Container>{getHat()}</Container>
}
