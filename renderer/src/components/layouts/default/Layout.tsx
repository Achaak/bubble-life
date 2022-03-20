import { BubbleCore } from '@src/core'
import { styled } from '@src/styles'
import { useEffect } from 'react'

const Container = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  cursor: process.env.NODE_ENV === 'development' ? 'default' : 'none',
  userSelect: 'none',
})

export const DefaultLayout: React.FC = ({ children }) => {
  useEffect(() => {
    new BubbleCore()
  }, [])

  return <Container>{children}</Container>
}
