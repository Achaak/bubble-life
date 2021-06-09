import { styled, keyframes } from '@/styles/css'
import React from 'react'
import { Bodies } from '../Bodies'
import { Clothes } from '../Clothes'
import { Eyes } from '../Eyes'
import { Hats } from '../Hats'

const scaleY = keyframes({
  '0%, 100%': { transform: 'scaleY(1)' },
  '50%': { transform: 'scaleY(1.1)' },
})

const Container = styled('div', {
  position: 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
})

const Content = styled('div', {
  height: '100%',
  width: '100%',
  animation: `${scaleY} 2000ms infinite`,
  transformOrigin: 'bottom',
  position: 'relative',
})

export const Bubble: React.FC = () => {
  return (
    <Container>
      <Content>
        <Bodies>
          <Eyes />
        </Bodies>
        <Hats />
        <Clothes />
      </Content>
    </Container>
  )
}
