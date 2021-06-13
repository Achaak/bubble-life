import { Bubble } from '@configs/bubble'
import { useOvermind } from '@src/store'
import { styled } from '@src/styles'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Container = styled('div', {
  position: 'relative',
  transition: 'all 300ms',
})

const SCALE_MAX = 1.5
const SCALE_MIN = 0.5

export const Bodies: React.FC = ({ children }) => {
  const [bodyDOM, setBodyDOM] = useState<React.ReactNode>(null)
  const [scale, setScale] = useState<number>(1)

  const { state } = useOvermind()
  const { body, weight } = state.bubble

  useEffect(() => {
    const getBody = async (): Promise<void> => {
      if (!body) return null

      const { default: Body } = await require(`./${body}/index`)

      setBodyDOM(<Body />)
    }

    getBody()
  }, [body])

  useEffect(() => {
    const getSize = (): number => {
      console.log('hey')
      const middle = Bubble.weight.min + (Bubble.weight.max - Bubble.weight.min) / 2

      if (weight > middle) {
        const min = middle
        const max = Bubble.weight.max
        const input = weight

        return 1 + ((SCALE_MAX - 1) * (input - min)) / (max - min)
      } else if (weight < middle) {
        const min = Bubble.weight.min
        const max = middle
        const input = weight

        return 1 + ((SCALE_MIN - 1) * (input - max)) / (min - max)
      } else {
        return 1
      }
    }

    setScale(getSize())
  }, [weight])

  console.log(scale, weight)

  return (
    <Container
      css={{
        transform: `scale(${scale})`,
      }}
    >
      {bodyDOM}
      {children}
    </Container>
  )
}
