import { useOvermind } from '@src/store'
import { styled } from '@src/styles'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Container = styled('div', {
  position: 'relative',
  transition: 'all 300ms',
})

export const Bodies: React.FC = ({ children }) => {
  const [bodyDOM, setBodyDOM] = useState<React.ReactNode>(null)

  const { state } = useOvermind()
  const { body } = state.bubble

  useEffect(() => {
    const getBody = async (): Promise<void> => {
      if (!body) return null

      const { default: Body } = await require(`./${body}/index`)

      setBodyDOM(<Body />)
    }

    getBody()
  }, [body])

  return (
    <Container>
      {bodyDOM}
      {children}
    </Container>
  )
}
