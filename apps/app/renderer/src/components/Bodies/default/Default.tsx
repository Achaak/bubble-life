import { styled } from '@bubble/styles'
import React from 'react'

const Body = styled('img', {})

export const BodyDefault: React.FC = () => {
  return <Body src="/svg/bodies/default.svg" width="100%" height="100%" />
}
