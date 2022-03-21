import { useAppSelector } from '@bubble/store/src/hooks'
import { selectElements } from '@bubble/store/src/reducers/bubble'
import { styled } from '@bubble/styles'
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

  const {
    eyes: { current },
  } = useAppSelector(selectElements)

  useEffect(() => {
    const getEyes = async (): Promise<void> => {
      if (!current.name) {
        setEyesDOM(null)
        return
      }

      const { default: Eyes } = await require(`./${current.name}/index`)

      setEyesDOM(<Eyes />)
    }

    getEyes()
  }, [current])

  return (
    <Container>
      {eyesDOM}
      {children}
    </Container>
  )
}
