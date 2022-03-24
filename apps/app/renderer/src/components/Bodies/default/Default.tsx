import { styled } from '@bubble/styles'
import React from 'react'

const Body = styled('img', {})

export const BodyDefault = (): JSX.Element => {
  return <Body src="/svg/bodies/default.svg" width="100%" height="100%" />
}
