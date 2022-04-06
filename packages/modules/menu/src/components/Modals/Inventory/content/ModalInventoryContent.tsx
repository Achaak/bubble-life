import { styled } from '@bubble/styles'
import { useAppSelector, selectInventory } from '@bubble/store'
import React from 'react'
import { getIconOfInventoryItem, ItemButton } from '@bubble/ui'

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
        const icon = getIconOfInventoryItem(item.type)
        return <ItemButton key={index} icon={icon} text={`x${item.stock}`} />
      })}
    </ContentContainer>
  )
}
