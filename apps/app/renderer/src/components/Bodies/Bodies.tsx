import { useAppSelector } from '@bubble/store'
import { selectElements } from '@bubble/store'
import { getMaxImportantItemInList } from '@bubble/common'
import { styled } from '@bubble/styles'
import type { Bodies as BodiesType } from '@bubble/types'
import React, { useEffect, useState } from 'react'

const Container = styled('div', {
  position: 'relative',
  transition: 'all 300ms',
})

export const Bodies: React.FC = ({ children }) => {
  const [bodyDOM, setBodyDOM] = useState<React.ReactNode>(null)

  const { body } = useAppSelector(selectElements)

  useEffect(() => {
    const getBody = async (): Promise<void> => {
      let bodyName: BodiesType | null = null

      if (body.action) {
        bodyName = body.action.name
      } else if (body.list.length > 0) {
        bodyName = getMaxImportantItemInList<BodiesType>(body.list)
      } else if (body.default) {
        bodyName = body.default
      }

      if (bodyName) {
        const { default: Body } = await require(`./${bodyName}/index`)

        setBodyDOM(<Body />)
      } else {
        setBodyDOM(null)
      }
    }

    getBody()
  }, [body])

  return (
    <Container>
      {bodyDOM}
      {children}
    </Container>
  )
}
