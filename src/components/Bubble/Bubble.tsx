import { styled, keyframes } from '@/styles/css'
import React from 'react'
import { Body } from '../Body'

const scaleY = keyframes({
  '0%, 100%': { transform: 'scaleY(1)' },
  '50%': { transform: 'scaleY(1.1)' },
})

const Container = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '30%',
  width: '30%',
})

const Content = styled('div', {
  height: '100%',
  width: '100%',
  animation: `${scaleY} 2000ms infinite`,
  transformOrigin: 'bottom',
})

export const Bubble: React.FC = () => {
  return (
    <Container>
      <Content>
        <Body />
      </Content>
    </Container>
  )
}
