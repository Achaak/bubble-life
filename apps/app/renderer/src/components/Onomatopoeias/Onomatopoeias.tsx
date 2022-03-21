import { styled } from '@bubble/styles'
import { useAppSelector } from '@src/redux/hooks'
import { selectElements } from '@src/redux/reducers/bubble'
import React, { useEffect, useState } from 'react'

const Container = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
})

export const Onomatopoeias: React.FC = ({ children }) => {
  const [onomatopoeiaDOM, setOnomatopoeiaDOM] = useState<React.ReactNode>(null)

  const {
    onomatopoeia: { current },
  } = useAppSelector(selectElements)

  useEffect(() => {
    const getOnomatopoeia = async (): Promise<void> => {
      if (!current.name) {
        setOnomatopoeiaDOM(null)
        return
      }

      const { default: Onomatopoeia } = await require(`./${current.name}/index`)

      setOnomatopoeiaDOM(<Onomatopoeia />)
    }

    getOnomatopoeia()
  }, [current])

  return (
    <Container>
      {onomatopoeiaDOM}
      {children}
    </Container>
  )
}
