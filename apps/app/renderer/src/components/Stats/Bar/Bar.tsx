import { styled } from '@bubble/styles'
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
  customColumnGap: 2,

  '@md': {
    customColumnGap: 4,
  },
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
  icon: string
}

export const Bar: React.FC<CustomProps> = ({ percentage, icon }) => {
  const getBarItems = (): React.ReactNode => {
    const bars = []

    for (let i = 0; i < 10; i++) {
      bars.push(<BarItem key={i} />)
    }

    return bars
  }

  return (
    <Container>
      <span className="material-icons-outlined size-32">{icon}</span>

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
