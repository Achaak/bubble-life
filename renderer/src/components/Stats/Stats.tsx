import { Bar } from '../Bar'
import { BubbleConfig } from '@configs/bubble'
import { useAppSelector } from '@src/redux/hooks'
import { selectName, selectSaturation } from '@src/redux/reducers/bubbleSlice'
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
  const saturation = useAppSelector(selectSaturation)
  const name = useAppSelector(selectName)

  const { t } = useTranslation(['words'], { i18n: i18n, useSuspense: false })

  return (
    <Container>
      <Left>
        <Bar
          label={t('words:saturation')}
          percentage={(100 / BubbleConfig.eat.saturation.max) * saturation}
        />
        <Bar label={t('words:happiness')} percentage={100} />
      </Left>
      <Center>
        <Name>{name}</Name>
      </Center>
      <Right>
        <Bar label={t('words:tiredness')} percentage={100} />
        <Bar label={t('words:health')} percentage={100} />
      </Right>
    </Container>
  )
}
