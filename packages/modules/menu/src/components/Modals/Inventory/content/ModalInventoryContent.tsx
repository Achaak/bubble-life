import { styled } from '@bubble/styles'
import { useAppSelector, selectInventory } from '@bubble/store'
import React from 'react'
import { getIconOfInventoryItem } from '@bubble/ui'
import { InventoryItem } from '../../../InventoryItem'

const ContentContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

export const ModalInventoryContent = (): JSX.Element => {
  const inventory = useAppSelector(selectInventory)

  return (
    <ContentContainer>
      {inventory.map((item, index) => {
        const Icon = getIconOfInventoryItem(item.type)
        return <InventoryItem key={index} Icon={Icon} text={`x${item.stock}`} />
      })}
    </ContentContainer>
  )
}
