import { useOvermind } from '@/store'
import { styled } from '@/styles'
import React from 'react'
import { ClotheCoat } from './Coat'

const Container = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
})

export const Clothes: React.FC = () => {
  const { state } = useOvermind()
  const { clothe } = state.bubble

  const getClothe = (): React.ReactNode => {
    switch (clothe) {
      case 'coat':
        return <ClotheCoat />

      default:
        return null
    }
  }

  return <Container>{getClothe()}</Container>
}
