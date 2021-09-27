import { useAppSelector } from '@src/redux/hooks'
import { selectElements } from '@src/redux/reducers/bubble'
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

  const { eyes } = useAppSelector(selectElements)

  useEffect(() => {
    const getEyes = async (): Promise<void> => {
      if (!eyes.current.name) {
        setEyesDOM(null)
        return null
      }

      const { default: Eyes } = await require(`./${eyes.current.name}/index`)

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
