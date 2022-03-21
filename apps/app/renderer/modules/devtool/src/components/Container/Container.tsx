import { styled } from '@bubble/styles'
import { Button } from '@bubble/ui/src/components/Inputs/Button'
import { resetActions } from '@src/redux/reducers/actions/actions'
import { resetBubble } from '@src/redux/reducers/bubble/actions'
import 'dayjs/locale'
import React from 'react'

const ContainerDOM = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  customRowGap: 16,
})

export const Container = (): JSX.Element => {
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
