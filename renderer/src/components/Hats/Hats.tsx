import { useAppSelector } from '@src/redux/hooks'
import { selectHat } from '@src/redux/reducers/bubbleSlice'
import { styled } from '@src/styles'
import React, { useEffect, useState } from 'react'

const Container = styled('div', {
  position: 'absolute',
  top: '0%',
  width: '100%',
  transform: 'translateY(-50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
})

export const Hats: React.FC = ({ children }) => {
  const [hatDOM, setHatDOM] = useState<React.ReactNode>(null)

  const hat = useAppSelector(selectHat)

  useEffect(() => {
    const getHat = async (): Promise<void> => {
      if (!hat) return null

      const { default: Hat } = await require(`./${hat}/index`)

      setHatDOM(<Hat />)
    }

    getHat()
  }, [hat])

  return (
    <Container>
      {hatDOM}
      {children}
    </Container>
  )
}
