import { styled } from '@bubble/styles'
import { Title } from '@bubble/ui'
import React from 'react'

const HeaderContainer = styled('div', {})

export const ModalStatsHeader = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Title component="h1">Statistics</Title>
    </HeaderContainer>
  )
}
