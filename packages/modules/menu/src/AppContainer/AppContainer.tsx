import React, { useState } from 'react'
import { styled } from '@bubble/styles'
import { ModalInventory } from '../components/Modals/Inventory'
import { ModalStats } from '../components/Modals/Stats'
import { ModalActions } from '../components/Modals/Actions'

const Content = styled('div', {
  display: 'flex',
  customColumnGap: 16,
})

const MenuIcon = styled('div', {
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: '$WHITE',
  br: 3,
  cursor: 'pointer',
  width: 52,
  height: 52,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
          <span className="material-icons-outlined md-32">sports_soccer</span>
        </MenuIcon>
        <MenuIcon onClick={(): void => setIsInventoryOpen(true)}>
          <span className="material-icons-outlined md-32">backpack</span>
        </MenuIcon>
        {/* <MenuIcon onClick={(): void => setIsStatsOpen(true)}>
          <span className="material-icons-outlined md-32">bar_chart</span>
        </MenuIcon> */}
      </Content>
    </>
  )
}
