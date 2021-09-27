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

  const {
    hat: { current },
  } = useAppSelector(selectElements)

  useEffect(() => {
    const getHat = async (): Promise<void> => {
      if (!current.name) {
        setHatDOM(null)
        return null
      }

      const { default: Hat } = await require(`./${current.name}/index`)

      setHatDOM(<Hat />)
    }

    getHat()
  }, [current])

  return (
    <Container>
      {hatDOM}
      {children}
    </Container>
  )
}
