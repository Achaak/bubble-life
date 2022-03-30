import { styled } from '@bubble/styles'
import { BxBaguette, BxBaseball, BxBed, BxShopping, BxSleepy } from '@bubble/ui'
import {
  addEatActionInAwaitListDefault,
  addNapActionInAwaitListDefault,
  addPlayActionInAwaitListDefault,
  addShoppingActionInAwaitListDefault,
  addSleepActionInAwaitListDefault,
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
    addPlayActionInAwaitListDefault()
    onClose()
  }

  const handleEat = (): void => {
    addEatActionInAwaitListDefault()
    onClose()
  }

  const handleNap = (): void => {
    addNapActionInAwaitListDefault()
    onClose()
  }

  const handleShopping = (): void => {
    addShoppingActionInAwaitListDefault()
    onClose()
  }

  const handleSleep = (): void => {
    addSleepActionInAwaitListDefault()
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
