import { styled } from '@bubble/styles'
import React from 'react'
import { NameModal } from './NameModal'

const Container = styled('div', {
  padding: 16,
})

export const LayoutDefault: React.FC = ({ children }) => {
  return (
    <>
      <NameModal />

      <Container>{children}</Container>
    </>
  )
}
