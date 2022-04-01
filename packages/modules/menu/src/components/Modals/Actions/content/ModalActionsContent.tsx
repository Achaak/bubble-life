import { styled } from '@bubble/styles'
import { BxBaguette, BxBaseball, BxBed, BxShopping, BxSleepy } from '@bubble/ui'
import {
  addEatActionInWaitingListDefault,
  addNapActionInWaitingListDefault,
  addPlayActionInWaitingListDefault,
  addShoppingActionInWaitingListDefault,
  addSleepActionInWaitingListDefault,
} from '@bubble/core'
import React from 'react'
import { InventoryItem } from '../../../InventoryItem'

const ContentContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

interface CustomProps {
  onClose: () => void
}

export const ModalActionsContent = ({ onClose }: CustomProps): JSX.Element => {
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
      <InventoryItem Icon={BxBaguette} onClick={handleEat} text="Eat" />
      <InventoryItem Icon={BxSleepy} onClick={handleNap} text="Nap" />
      <InventoryItem Icon={BxBaseball} onClick={handlePlay} text="Play" />
      <InventoryItem Icon={BxShopping} onClick={handleShopping} text="Shopping" />
      <InventoryItem Icon={BxBed} onClick={handleSleep} text="Sleep" />
    </ContentContainer>
  )
}
