import { useAppSelector } from '@bubble/store/src/hooks'
import { selectElements } from '@bubble/store/src/reducers/bubble'
import { styled } from '@bubble/styles'
import React, { useEffect, useState } from 'react'
import type { Hats as HatsType } from '@bubble/types/src/bubble'
import { getMaxImportantItemInList } from '@bubble/common/src/elementsList'

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
      let hatName: HatsType | null = null

      if (hat.action) {
        hatName = hat.action.name
      } else if (hat.list.length > 0) {
        hatName = getMaxImportantItemInList<HatsType>(hat.list)
      } else if (hat.default) {
        hatName = hat.default
      }

      if (hatName) {
        const { default: Hat } = await require(`./${hatName}/index`)

        setHatDOM(<Hat />)
      } else {
        setHatDOM(null)
      }
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
