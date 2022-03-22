import { BubbleConfig } from '@bubble/configs/bubble'
import { useAppSelector } from '@bubble/store/src/hooks'
import { selectName, selectVitals } from '@bubble/store/src/reducers/bubble'
import { styled } from '@bubble/styles'
import { BxBaguette } from '@bubble/ui/src/Icons/bx-baguette'
import { BxBed } from '@bubble/ui/src/Icons/bx-bed'
import { BxHeart } from '@bubble/ui/src/Icons/bx-heart'
import { BxParty } from '@bubble/ui/src/Icons/bx-party'
import React from 'react'

import { Bar } from './Bar'

const Container = styled('div', {
  display: 'flex',
  padding: 16,
  customColumnGap: 32,
})

const Left = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flex: 1,
  customColumnGap: 16,

  '@md': {
    customColumnGap: 24,
  },
})

const Center = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
})

const Name = styled('span', {
  fontSize: '1.5em',
})

const Right = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flex: 1,
  customColumnGap: 16,

  '@md': {
    customColumnGap: 24,
  },
})

export const Stats: React.FC = () => {
  const { saturation, happiness, health, tiredness } = useAppSelector(selectVitals)
  const name = useAppSelector(selectName)

  return (
    <Container>
      <Left>
        <Bar
          percentage={(100 / BubbleConfig.vitals.saturation.max) * saturation}
          Icon={BxBaguette}
        />
        <Bar percentage={(100 / BubbleConfig.vitals.happiness.max) * happiness} Icon={BxParty} />
      </Left>
      <Center>
        <Name>{name}</Name>
      </Center>
      <Right>
        <Bar percentage={(100 / BubbleConfig.vitals.tiredness.max) * tiredness} Icon={BxBed} />
        <Bar percentage={(100 / BubbleConfig.vitals.health.max) * health} Icon={BxHeart} />
      </Right>
    </Container>
  )
}
