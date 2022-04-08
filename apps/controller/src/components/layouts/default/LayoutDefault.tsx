import { styled } from '@bubble/styles'
import React from 'react'
import { NameModal } from './NameModal'

const Container = styled('div', {
  padding: 16,
})

interface CustomProps {
  children: React.ReactNode
}

export const LayoutDefault: React.FC<CustomProps> = ({ children }) => {
  return (
    <>
      <NameModal />

      <Container>{children}</Container>
    </>
  )
}
