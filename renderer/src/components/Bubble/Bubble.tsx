import { Bodies } from '../Bodies'
import { Clothes } from '../Clothes'
import { Eyes } from '../Eyes'
import { Hats } from '../Hats'
import { Onomatopoeias } from '../Onomatopoeias'
import { BubbleConfig } from '@configs/bubble'
import { addEatActionInAwaitList } from '@src/core/actions/eat'
import { useAppSelector } from '@src/redux/hooks'
import { selectVitals } from '@src/redux/reducers/bubble'
import { styled } from '@src/styles/css'
import React, { useEffect, useState } from 'react'

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
  transformOrigin: 'bottom',
  position: 'relative',
})

const SCALE_MAX = 1.5
const SCALE_MIN = 0.5

export const Bubble: React.FC = () => {
  const [scale, setScale] = useState<number>(1)

  const { weight } = useAppSelector(selectVitals)

  useEffect(() => {
    const getSize = (): number => {
      const middle =
        BubbleConfig.vitals.weight.min +
        (BubbleConfig.vitals.weight.max - BubbleConfig.vitals.weight.min) / 2

      if (weight > middle) {
        const min = middle
        const max = BubbleConfig.vitals.weight.max
        const input = weight

        return 1 + ((SCALE_MAX - 1) * (input - min)) / (max - min)
      } else if (weight < middle) {
        const min = BubbleConfig.vitals.weight.min
        const max = middle
        const input = weight

        return 1 + ((SCALE_MIN - 1) * (input - max)) / (min - max)
      } else {
        return 1
      }
    }

    setScale(getSize())
  }, [weight])

  const handleClickOnBubble = (): void => {
    console.log('click on bubble')
    addEatActionInAwaitList({
      duration: 1000,
      importance: 1,
      start: Date.now(),
    })
  }

  return (
    <Container onClick={handleClickOnBubble}>
      <Size
        css={{
          transform: `scale(${scale})`,
        }}
      >
        <Content id="bubble-content">
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
