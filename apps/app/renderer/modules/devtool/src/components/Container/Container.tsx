import { styled } from '@bubble/styles'
import { Button } from '@bubble/ui/src/components/Inputs/Button'
import { resetBubble } from '@src/redux/reducers/bubble/actions'
import 'dayjs/locale'
import React from 'react'

const ContainerDOM = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Container = (): JSX.Element => {
  const handleResetBubble = (): void => {
    console.log('reset bubble')
    resetBubble()
  }

  return (
    <ContainerDOM>
      <Button onClick={handleResetBubble}>Reset Bubble</Button>
    </ContainerDOM>
  )
}
