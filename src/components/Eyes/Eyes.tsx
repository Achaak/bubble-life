import { useOvermind } from '@/store'
import { styled } from '@/styles'
import React from 'react'
import { EyesAfraid } from './Afraid'
import { EyesEnjoy } from './Enjoy'
import { EyesSleep } from './Sleep'
import { EyesSunglass } from './Sunglass'

const Container = styled('div', {
  position: 'absolute',
  top: '30%',
  width: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const Eyes: React.FC = () => {
  const { state } = useOvermind()
  const { eyes } = state.bubble

  const getEyes = (): React.ReactNode => {
    switch (eyes) {
      case 'enjoy':
        return <EyesEnjoy />

      case 'afraid':
        return <EyesAfraid />

      case 'sleep':
        return <EyesSleep />

      case 'sunglass':
        return <EyesSunglass />

      default:
        return null
    }
  }

  return <Container>{getEyes()}</Container>
}
