import { styled } from '@bubble/styles'
import React from 'react'

const Eyes = styled('img', {
  transform: 'scale(1.2)',
})

export const EyesSunglass = (): JSX.Element => {
  return <Eyes src="/svg/eyes/sunglass.svg" width="100%" height="100%" />
}
