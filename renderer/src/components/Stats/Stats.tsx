import { BxBaguette } from '../Icons/bx-baguette'
import { BxBed } from '../Icons/bx-bed'
import { BxDroplet } from '../Icons/bx-droplet'
import { BxHeart } from '../Icons/bx-heart'
import { Bar } from './Bar'
import { BubbleConfig } from '@configs/bubble'
import { useAppSelector } from '@src/redux/hooks'
import { selectName, selectVitals } from '@src/redux/reducers/bubble'
import { styled } from '@src/styles'
import React from 'react'

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
  customColumnGap: 32,
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
  customColumnGap: 32,
})

export const Stats: React.FC = () => {
  //const weight = useAppSelector(selectWeight)
  const { saturation, happiness, health, tiredness } = useAppSelector(selectVitals)
  const name = useAppSelector(selectName)

  //console.log(useAppSelector(selectVitals))

  return (
    <Container>
      <Left>
        <Bar
          percentage={(100 / BubbleConfig.vitals.saturation.max) * saturation}
          Icon={BxBaguette}
        />
        <Bar percentage={(100 / BubbleConfig.vitals.happiness.max) * happiness} Icon={BxDroplet} />
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
