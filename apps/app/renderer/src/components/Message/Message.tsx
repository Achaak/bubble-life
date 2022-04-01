import { selectMessage, useAppSelector } from '@bubble/store'
import { styled } from '@bubble/styles'
import React from 'react'

const Container = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  transform: 'translate(100%, -100%)',
})

export const Message = (): JSX.Element => {
  const { current } = useAppSelector(selectMessage)

  if (!current) {
    return <></>
  }

  return <Container>{current.content}</Container>
}
