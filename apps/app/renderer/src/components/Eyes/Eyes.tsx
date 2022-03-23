import { useAppSelector } from '@bubble/store/src/hooks'
import { selectElements } from '@bubble/store/src/reducers/bubble'
import { styled } from '@bubble/styles'
import React, { useEffect, useState } from 'react'
import type { Eyes as EyesType } from '@bubble/types/src/bubble'
import { getMaxImportantItemInList } from '@bubble/common/src/elementsList'

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
      let eyesName: EyesType | null = null

      if (eyes.action) {
        eyesName = eyes.action.name
      } else if (eyes.list.length > 0) {
        eyesName = getMaxImportantItemInList<EyesType>(eyes.list)
      } else if (eyes.default) {
        eyesName = eyes.default
      }

      if (eyesName) {
        const { default: Eyes } = await require(`./${eyesName}/index`)

        setEyesDOM(<Eyes />)
      } else {
        setEyesDOM(null)
      }
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
