import { Bar } from '../Bar'
import { BubbleConfig } from '@configs/bubble'
import { useAppSelector } from '@src/redux/hooks'
import { selectName, selectVitals } from '@src/redux/reducers/bubble'
import { styled } from '@src/styles'
import i18n from '@src/utils/i18n'
import React from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation(['words'], { i18n: i18n, useSuspense: false })

  return (
    <Container>
      <Left>
        <Bar
          label={t('words:saturation')}
          percentage={(100 / BubbleConfig.vitals.saturation.max) * saturation}
        />
        <Bar
          label={t('words:happiness')}
          percentage={(100 / BubbleConfig.vitals.happiness.max) * happiness}
        />
      </Left>
      <Center>
        <Name>{name}</Name>
      </Center>
      <Right>
        <Bar
          label={t('words:tiredness')}
          percentage={(100 / BubbleConfig.vitals.tiredness.max) * tiredness}
        />
        <Bar
          label={t('words:health')}
          percentage={(100 / BubbleConfig.vitals.health.max) * health}
        />
      </Right>
    </Container>
  )
}
