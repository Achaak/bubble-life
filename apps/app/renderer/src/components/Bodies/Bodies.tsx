import { styled } from '@bubble/styles'
import { useAppSelector } from '@src/redux/hooks'
import { selectElements } from '@src/redux/reducers/bubble'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Container = styled('div', {
  position: 'relative',
  transition: 'all 300ms',
})

export const Bodies: React.FC = ({ children }) => {
  const [bodyDOM, setBodyDOM] = useState<React.ReactNode>(null)

  const {
    body: { current },
  } = useAppSelector(selectElements)

  useEffect(() => {
    const getBody = async (): Promise<void> => {
      if (!current.name) {
        setBodyDOM(null)
        return null
      }

      const { default: Body } = await require(`./${current.name}/index`)

      setBodyDOM(<Body />)
    }

    getBody()
  }, [current])

  return (
    <Container>
      {bodyDOM}
      {children}
    </Container>
  )
}
