import { styled, keyframes } from '@src/styles/css'
import React, { useEffect, useState } from 'react'
import { Bodies } from '../Bodies'
import { Clothes } from '../Clothes'
import { Eyes } from '../Eyes'
import { Hats } from '../Hats'
import { useOvermind } from '@src/store'
import { Bubble as BubbleConfig } from '@configs/bubble'
import { useAppDispatch, useAppSelector } from '@src/redux/hooks'
import { increment, selectCount } from '@src/redux/reducers/counterSlice'

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
  position: 'relative',
})

const SCALE_MAX = 1.5
const SCALE_MIN = 0.5

export const Bubble: React.FC = () => {
  const [scale, setScale] = useState<number>(1)

  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  console.log(count)

  const { state } = useOvermind()
  const { name, weight } = state.bubble

  useEffect(() => {
    setTimeout(() => dispatch(increment()), 1000)
  }, [])

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

  console.log(scale, weight)
  return (
    <>
      <span>{name}</span>
      <span>{weight}</span>
      <span>----{count}----</span>
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
          </Content>
        </Size>
      </Container>
    </>
  )
}