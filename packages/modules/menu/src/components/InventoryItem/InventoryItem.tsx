import React from 'react'
import { styled } from '@bubble/styles'
import type { SVGComponentIcon } from '@bubble/ui'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: '$WHITE',
  br: 3,
  height: 80,
  width: 80,
  margin: 8,
})

const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Text = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

interface CustomProps {
  onClick?: () => void
  text: string
  Icon: React.ComponentType<SVGComponentIcon>
}

export const InventoryItem = ({ onClick, text, Icon }: CustomProps): JSX.Element => {
  return (
    <Container
      onClick={onClick}
      css={{
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <IconContainer>
        <Icon size={32} colorName="WHITE" />
      </IconContainer>
      <Text>{text}</Text>
    </Container>
  )
}
