import { useOvermind } from '@src/store'
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

  const { state } = useOvermind()
  const { hat } = state.bubble

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
