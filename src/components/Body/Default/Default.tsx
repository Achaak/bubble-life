import { styled } from '@/styles/css'
import React from 'react'

const Body = styled('img', {
  display: 'flex',
  flexDirection: 'column',
})

export const BodyDefault: React.FC = () => {
  return <Body src="/svg/body/default.svg" width="100%" height="100%" />
}
