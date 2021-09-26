import { useAppSelector } from '@src/redux/hooks'
import { selectElements } from '@src/redux/reducers/bubble'
import { styled } from '@src/styles'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Container = styled('div', {
  position: 'relative',
  transition: 'all 300ms',
})

export const Bodies: React.FC = ({ children }) => {
  const [bodyDOM, setBodyDOM] = useState<React.ReactNode>(null)

  const { body } = useAppSelector(selectElements)

  useEffect(() => {
    const getBody = async (): Promise<void> => {
      if (!body.current) {
        setBodyDOM(null)
        return null
      }

      const { default: Body } = await require(`./${body.current}/index`)

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
