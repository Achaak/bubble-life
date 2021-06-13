import { useOvermind } from '@src/store'
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

  const { state } = useOvermind()
  const { clothe } = state.bubble

  useEffect(() => {
    const getClothe = async (): Promise<void> => {
      if (!clothe) return null

      const { default: Clothe } = await require(`./${clothe}/index`)

      setClotheDOM(<Clothe />)
    }

    getClothe()
  }, [clothe])

  return (
    <Container>
      {clotheDOM}
      {children}
    </Container>
  )
}
