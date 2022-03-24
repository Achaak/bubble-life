import React, { useState } from 'react'
import { BxsBaseball } from '@bubble/ui'
import { BxsPieChartAlt2 } from '@bubble/ui'
import { BxsBackpack } from '@bubble/ui'
import { styled } from '@bubble/styles'
import { ModalInventory } from '../Modals/Inventory'
import { ModalStats } from '../Modals/Stats'
import { ModalActions } from '../Modals/Actions'

const Content = styled('div', {
  display: 'flex',
  customColumnGap: 16,
})

const MenuIcon = styled('div', {
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: '$WHITE',
  br: 3,
  padding: 8,
  cursor: 'pointer',
})

export const Container: React.FC = () => {
  const [isActionsOpen, setIsActionsOpen] = useState(false)
  const [isStatsOpen, setIsStatsOpen] = useState(false)
  const [isInventoryOpen, setIsInventoryOpen] = useState(false)

  return (
    <>
      <ModalInventory visible={isInventoryOpen} onClose={(): void => setIsInventoryOpen(false)} />
      <ModalStats visible={isStatsOpen} onClose={(): void => setIsStatsOpen(false)} />
      <ModalActions visible={isActionsOpen} onClose={(): void => setIsActionsOpen(false)} />

      <Content>
        <MenuIcon onClick={(): void => setIsActionsOpen(true)}>
          <BxsBaseball size={32} colorName="WHITE" />
        </MenuIcon>
        <MenuIcon onClick={(): void => setIsInventoryOpen(true)}>
          <BxsBackpack size={32} colorName="WHITE" />
        </MenuIcon>
        <MenuIcon onClick={(): void => setIsStatsOpen(true)}>
          <BxsPieChartAlt2 size={32} colorName="WHITE" />
        </MenuIcon>
      </Content>
    </>
  )
}
