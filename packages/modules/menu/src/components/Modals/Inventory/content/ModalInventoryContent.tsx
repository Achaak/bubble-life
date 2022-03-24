import { styled } from '@bubble/styles'
import { useAppSelector, selectInventory } from '@bubble/store'
import React from 'react'
import { getIconOfInventoryItem } from '@bubble/ui'

const ContentContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

const Item = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: '$WHITE',
  br: 3,
  height: 80,
  width: 80,
  margin: 8,
})

const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Stock = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ModalInventoryContent = (): JSX.Element => {
  const inventory = useAppSelector(selectInventory)

  return (
    <ContentContainer>
      {inventory.map((item, index) => {
        const Icon = getIconOfInventoryItem(item.type)
        return (
          <Item key={index}>
            <IconContainer>
              <Icon size={32} colorName="WHITE" />
            </IconContainer>
            <Stock>x{item.stock}</Stock>
          </Item>
        )
      })}
    </ContentContainer>
  )
}
