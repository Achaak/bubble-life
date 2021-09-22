import { Bubble, Stats, Modules } from '@src/components'
import { styled } from '@src/styles'
import React from 'react'

const Overlay = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
})

const Home: React.FC = () => {
  return (
    <>
      <Bubble />
      <Overlay>
        <Modules />
        <Stats />
      </Overlay>
    </>
  )
}

export default Home
