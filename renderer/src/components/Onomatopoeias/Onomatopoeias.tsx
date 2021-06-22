import { useAppSelector } from '@src/redux/hooks'
import { selectOnomatopoeia } from '@src/redux/reducers/bubbleSlice'
import { styled } from '@src/styles'
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

  const onomatopoeia = useAppSelector(selectOnomatopoeia)

  useEffect(() => {
    const getOnomatopoeia = async (): Promise<void> => {
      if (!onomatopoeia) return null

      const { default: Onomatopoeia } = await require(`./${onomatopoeia}/index`)

      setOnomatopoeiaDOM(<Onomatopoeia />)
    }

    getOnomatopoeia()
  }, [onomatopoeia])

  return (
    <Container>
      {onomatopoeiaDOM}
      {children}
    </Container>
  )
}
