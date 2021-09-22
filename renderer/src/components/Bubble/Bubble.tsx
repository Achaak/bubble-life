import { Bodies } from '../Bodies'
import { Clothes } from '../Clothes'
import { Eyes } from '../Eyes'
import { Hats } from '../Hats'
import { Onomatopoeias } from '../Onomatopoeias'
import { BubbleConfig } from '@configs/bubble'
import { useAppSelector } from '@src/redux/hooks'
import { selectWeight } from '@src/redux/reducers/bubbleSlice'
import { styled, keyframes } from '@src/styles/css'
import React, { useEffect, useState } from 'react'

const scaleY = keyframes({
  '0%, 100%': { transform: 'scaleY(1)' },
  '50%': { transform: 'scaleY(1.1)' },
})

const Container = styled('div', {
  position: 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
})

const Size = styled('div', {
  position: 'relative',
})

const Content = styled('div', {
  height: '100%',
  width: '100%',
  animation: `${scaleY} 2000ms infinite`,
  transformOrigin: 'bottom',
  transition: 'all 300ms',
  position: 'relative',
})

const SCALE_MAX = 1.5
const SCALE_MIN = 0.5

export const Bubble: React.FC = () => {
  const [scale, setScale] = useState<number>(1)

  const weight = useAppSelector(selectWeight)

  useEffect(() => {
    const getSize = (): number => {
      const middle =
        BubbleConfig.weight.min + (BubbleConfig.weight.max - BubbleConfig.weight.min) / 2

      if (weight > middle) {
        const min = middle
        const max = BubbleConfig.weight.max
        const input = weight

        return 1 + ((SCALE_MAX - 1) * (input - min)) / (max - min)
      } else if (weight < middle) {
        const min = BubbleConfig.weight.min
        const max = middle
        const input = weight

        return 1 + ((SCALE_MIN - 1) * (input - max)) / (min - max)
      } else {
        return 1
      }
    }

    setScale(getSize())
  }, [weight])

  return (
    <Container>
      <Size
        css={{
          transform: `scale(${scale})`,
        }}
      >
        <Content>
          <Bodies>
            <Eyes />
          </Bodies>
          <Hats />
          <Clothes />
          <Onomatopoeias />
        </Content>
      </Size>
    </Container>
  )
}
