import { SVGComponentIcon } from '@src/components/Icons/types'
import { styled } from '@src/styles/css'
import React from 'react'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  customColumnGap: 12,
  width: '100%',
})

const BarContainer = styled('div', {
  display: 'flex',
  height: 24,
  border: '3px solid',
  borderColor: '$WHITE',
  borderRadius: 50,
  overflow: 'hidden',
  position: 'relative',
  flex: 1,
})

const BarContent = styled('div', {
  display: 'flex',
  border: '3px solid',
  borderColor: '$BLACK',
  position: 'absolute',
  right: 0,
  left: 0,
  top: 0,
  bottom: 0,
  borderRadius: 50,
  overflow: 'hidden',
  customColumnGap: 4,
})

const BarItem = styled('div', {
  flex: 1,
  backgroundColor: '$WHITE',
})

const HideElement = styled('div', {
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: '$BLACK',
  transition: 'width 300ms',
})

interface CustomProps {
  percentage: number
  Icon: React.FC<SVGComponentIcon>
}

export const Bar: React.FC<CustomProps> = ({ percentage, Icon }) => {
  const getBarItems = (): React.ReactNode => {
    const bars = []

    for (let i = 0; i < 10; i++) {
      bars.push(<BarItem key={i} />)
    }

    return bars
  }

  return (
    <Container>
      <Icon size={24} colorName="WHITE" />

      <BarContainer>
        <BarContent>
          {getBarItems()}
          <HideElement
            css={{
              width: `${100 - percentage}%`,
            }}
          />
        </BarContent>
      </BarContainer>
    </Container>
  )
}
