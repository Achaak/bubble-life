import React from 'react'

import { Modal } from '@bubble/ui'
import { ModalActionsContent } from './content'
import { ModalActionsHeader } from './header'

export interface ModalActionsProps {
  visible: boolean
  onClose: () => void
}

export const ModalActions: React.FC<ModalActionsProps> = ({ onClose, visible }) => {
  return (
    <Modal
      visible={visible}
      padding={{ container: 'md', content: 'sm' }}
      hasCloseBtn={true}
      onClose={onClose}
      closeClickOutside
      header={<ModalActionsHeader />}
      content={<ModalActionsContent onClose={onClose} />}
    />
  )
}
