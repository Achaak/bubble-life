import React from 'react'

import { Modal } from '@bubble/ui'
import { ModalStatsContent } from './content'
import { ModalStatsHeader } from './header'

export interface ModalStatsProps {
  visible: boolean
  onClose: () => void
}

export const ModalStats: React.FC<ModalStatsProps> = ({ onClose, visible }) => {
  return (
    <Modal
      visible={visible}
      padding={{ container: 'md', content: 'sm' }}
      hasCloseBtn={true}
      onClose={onClose}
      closeClickOutside
      header={<ModalStatsHeader />}
      content={<ModalStatsContent />}
    />
  )
}
