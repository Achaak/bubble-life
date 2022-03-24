import React from 'react'

import { Modal } from '@bubble/ui'
import { ModalActionsContent } from './content'
import { ModalActionsHeader } from './header'

export interface ModalActionsProps {
  visible: boolean
  onClose: () => void
}

export const ModalActions = ({ onClose, visible }: ModalActionsProps): JSX.Element => {
  return (
    <Modal
      visible={visible}
      padding={{ container: 'md' }}
      hasCloseBtn={true}
      onClose={onClose}
      closeClickOutside
      header={<ModalActionsHeader />}
      content={<ModalActionsContent />}
    />
  )
}
