import { resetActions, resetBubble } from '@bubble/store'
import { styled } from '@bubble/styles'
import { Button } from '@bubble/ui'
import 'dayjs/locale'
import React from 'react'

const ContainerDOM = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  customRowGap: 16,
})

export const Container: React.FC = () => {
  const handleResetBubble = (): void => {
    console.log('[Reset bubble]')
    resetBubble()
  }

  const handleResetActions = (): void => {
    console.log('[Reset actions]')
    resetActions()
  }

  return (
    <ContainerDOM>
      <Button onClick={handleResetBubble}>Reset Bubble</Button>
      <Button onClick={handleResetActions}>Reset Actions</Button>
    </ContainerDOM>
  )
}
