import { styled } from '@bubble/styles'
import { Title } from '@bubble/ui'
import React from 'react'

const HeaderContainer = styled('div', {})

export const ModalActionsHeader = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Title component="h1">Actions</Title>
    </HeaderContainer>
  )
}
