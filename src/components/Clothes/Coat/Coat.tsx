import { styled } from '@/styles/css'
import React from 'react'

const Clothe = styled('img', {
  position: 'absolute',
  left: '50%',
  bottom: '-4%',
  transform: 'translateX(-50%)',
})

export const ClotheCoat: React.FC = () => {
  return <Clothe src="/svg/clothes/coat.svg" width="105%" />
}
