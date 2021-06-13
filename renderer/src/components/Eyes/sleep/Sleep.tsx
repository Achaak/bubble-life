import { styled } from '@src/styles/css'
import React from 'react'

const Eyes = styled('img', {})

export const EyesSleep: React.FC = () => {
  return <Eyes src="/svg/eyes/sleep.svg" width="100%" height="100%" />
}
