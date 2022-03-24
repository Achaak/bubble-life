import React, { useState } from 'react'
import { BxsBaseball } from '@bubble/ui/src/Icons/bxs-baseball'
import { BxsPieChartAlt2 } from '@bubble/ui/src/Icons/bxs-pieChartAlt2'
import { BxsBackpack } from '@bubble/ui/src/Icons/bxs-backpack'
import { styled } from '@bubble/styles'
import { ModalMenu } from '../Modals/Menu'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <ModalMenu visible={isMenuOpen} onClose={(): void => setIsMenuOpen(false)} />

      <Content>
        <MenuIcon onClick={(): void => setIsMenuOpen(true)}>
          <BxsBaseball size={32} colorName="WHITE" />
        </MenuIcon>
        <MenuIcon onClick={(): void => setIsMenuOpen(true)}>
          <BxsBackpack size={32} colorName="WHITE" />
        </MenuIcon>
        <MenuIcon onClick={(): void => setIsMenuOpen(true)}>
          <BxsPieChartAlt2 size={32} colorName="WHITE" />
        </MenuIcon>
      </Content>
    </>
  )
}
