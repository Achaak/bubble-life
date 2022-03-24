import React from 'react'

import { Modal } from '@bubble/ui/src/components/Modals/Default'
import { ModalMenuContent } from './content'
import { ModalMenuFooter } from './footer'
import { ModalMenuHeader } from './header'

export interface ModalMenuProps {
  visible: boolean
  onClose: () => void
}

export const ModalMenu = ({ onClose, visible }: ModalMenuProps): JSX.Element => {
  return (
    <Modal
      visible={visible}
      padding={{ container: 'md' }}
      hasCloseBtn={true}
      onClose={onClose}
      closeClickOutside
      header={<ModalMenuHeader />}
      content={<ModalMenuContent />}
      footer={<ModalMenuFooter />}
    />
  )
}
