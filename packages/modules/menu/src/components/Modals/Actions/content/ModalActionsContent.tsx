import { styled } from '@bubble/styles'
import {
  addEatActionInWaitingListDefault,
  addNapActionInWaitingListDefault,
  addPlayActionInWaitingListDefault,
  addShoppingActionInWaitingListDefault,
  addSleepActionInWaitingListDefault,
} from '@bubble/core'
import React from 'react'
import { ItemButton } from '@bubble/ui'

const ContentContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

interface CustomProps {
  onClose: () => void
}

export const ModalActionsContent: React.FC<CustomProps> = ({ onClose }) => {
  const handlePlay = (): void => {
    addPlayActionInWaitingListDefault()
    onClose()
  }

  const handleEat = (): void => {
    addEatActionInWaitingListDefault()
    onClose()
  }

  const handleNap = (): void => {
    addNapActionInWaitingListDefault()
    onClose()
  }

  const handleShopping = (): void => {
    addShoppingActionInWaitingListDefault()
    onClose()
  }

  const handleSleep = (): void => {
    addSleepActionInWaitingListDefault()
    onClose()
  }

  return (
    <ContentContainer>
      <ItemButton icon="restaurant" onClick={handleEat} text="Eat" />
      <ItemButton icon="bed" onClick={handleNap} text="Nap" />
      <ItemButton icon="sports_soccer" onClick={handlePlay} text="Play" />
      <ItemButton icon="shopping_cart" onClick={handleShopping} text="Shopping" />
      <ItemButton icon="bed" onClick={handleSleep} text="Sleep" />
    </ContentContainer>
  )
}
