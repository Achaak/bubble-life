import { Core } from '@/core'
import { styled } from '@/styles/css'
import React, { useEffect } from 'react'

const ContainerDOM = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
})

export const Container: React.FC = ({ children }) => {
  useEffect(() => {
    new Core()
  }, [])

  return <ContainerDOM>{children}</ContainerDOM>
}
