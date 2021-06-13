import { useOvermind } from '@src/store'
import { styled } from '@src/styles'
import React, { useEffect, useState } from 'react'

const Container = styled('div', {
  position: 'absolute',
  top: '30%',
  width: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const Eyes: React.FC = ({ children }) => {
  const [eyesDOM, setEyesDOM] = useState<React.ReactNode>(null)

  const { state } = useOvermind()
  const { eyes } = state.bubble

  useEffect(() => {
    const getEyes = async (): Promise<void> => {
      if (!eyes) return null

      const { default: Eyes } = await require(`./${eyes}/index`)

      setEyesDOM(<Eyes />)
    }

    getEyes()
  }, [eyes])

  return (
    <Container>
      {eyesDOM}
      {children}
    </Container>
  )
}
