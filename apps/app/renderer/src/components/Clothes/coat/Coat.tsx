import { styled } from '@bubble/styles'
import React from 'react'

const Clothe = styled('img', {
  position: 'absolute',
  left: '50%',
  bottom: '-4.5%',
  transform: 'translateX(-50%)',
})

export const ClotheCoat = (): JSX.Element => {
  return <Clothe src="/svg/clothes/coat.svg" width="104%" />
}
