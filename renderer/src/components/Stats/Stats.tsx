import { styled } from '@src/styles'
import React from 'react'
import { selectName, selectWeight } from '@src/redux/reducers/bubbleSlice'
import { useAppSelector } from '@src/redux/hooks'

const Container = styled('div', {
  display: 'flex',
  padding: 16,
})

const Left = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flex: 1,
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
  justifyContent: 'space-around',
  flex: 1,
})

export const Stats: React.FC = () => {
  const weight = useAppSelector(selectWeight)
  const name = useAppSelector(selectName)

  return (
    <Container>
      <Left>
        <span>{weight}</span>
      </Left>
      <Center>
        <Name>{name}</Name>
      </Center>
      <Right></Right>
    </Container>
  )
}
