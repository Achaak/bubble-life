import React from 'react'

import { Modal } from '@bubble/ui'
import { ModalInventoryContent } from './content'
import { ModalInventoryHeader } from './header'

export interface ModalInventoryProps {
  visible: boolean
  onClose: () => void
}

export const ModalInventory = ({ onClose, visible }: ModalInventoryProps): JSX.Element => {
  return (
    <Modal
      visible={visible}
      padding={{ container: 'md', content: 'sm' }}
      hasCloseBtn={true}
      onClose={onClose}
      closeClickOutside
      header={<ModalInventoryHeader />}
      content={<ModalInventoryContent />}
    />
  )
}
