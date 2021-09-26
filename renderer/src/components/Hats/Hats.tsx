import { useAppSelector } from '@src/redux/hooks'
import { selectElements } from '@src/redux/reducers/bubble'
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

  const { hat } = useAppSelector(selectElements)

  useEffect(() => {
    const getHat = async (): Promise<void> => {
      if (!hat.current) {
        setHatDOM(null)
        return null
      }

      const { default: Hat } = await require(`./${hat.current}/index`)

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
