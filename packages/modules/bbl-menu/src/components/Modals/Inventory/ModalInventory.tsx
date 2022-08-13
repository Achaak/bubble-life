import React from 'react'

import { Modal } from '@bubble/ui'
import { ModalInventoryContent } from './content/index.js'
import { ModalInventoryHeader } from './header/index.js'

export interface ModalInventoryProps {
  visible: boolean
  onClose: () => void
}

export const ModalInventory: React.FC<ModalInventoryProps> = ({ onClose, visible }) => {
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
