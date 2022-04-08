import React from 'react'
import { styled } from '@bubble/styles'

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
  fontSize: '$EM-SMALL',
})

interface CustomProps {
  onClick?: () => void
  text: string
  icon: string
}

export const ItemButton = ({ onClick, text, icon }: CustomProps): JSX.Element => {
  return (
    <Container
      onClick={onClick}
      css={{
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <IconContainer>
        <span className="material-icons-outlined size-32">{icon}</span>
      </IconContainer>
      <Text>{text}</Text>
    </Container>
  )
}
