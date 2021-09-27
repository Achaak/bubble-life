import { useAppSelector } from '@src/redux/hooks'
import { selectElements } from '@src/redux/reducers/bubble'
import { styled } from '@src/styles'
import React, { useEffect, useState } from 'react'

const Container = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
})

export const Clothes: React.FC = ({ children }) => {
  const [clotheDOM, setClotheDOM] = useState<React.ReactNode>(null)

  const {
    clothe: { current },
  } = useAppSelector(selectElements)

  useEffect(() => {
    const getClothe = async (): Promise<void> => {
      if (!current.name) {
        setClotheDOM(null)
        return null
      }

      const { default: Clothe } = await require(`./${current.name}/index`)

      setClotheDOM(<Clothe />)
    }

    getClothe()
  }, [current])

  return (
    <Container>
      {clotheDOM}
      {children}
    </Container>
  )
}
