import { Core } from '@/core'
import { styled } from '@/styles/css'
import React, { useEffect } from 'react'

const ContainerDOM = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Container: React.FC = ({ children }) => {
  useEffect(() => {
    new Core()
  }, [])

  return <ContainerDOM>{children}</ContainerDOM>
}
