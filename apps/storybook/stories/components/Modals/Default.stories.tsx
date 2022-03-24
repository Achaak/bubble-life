import { globalStyles } from '@bubble/styles'
import type { ModalProps } from '@bubble/ui/src/components/Modals/Default'
import { Modal } from '@bubble/ui/src/components/Modals/Default'
import type { Meta, Story } from '@storybook/react'

export default {
  title: 'Components/Modals/Menu',
  component: Modal,
  argTypes: {},
} as Meta<ModalProps>

const Template: Story<ModalProps> = (args) => {
  globalStyles()

  return <Modal {...(args as never)} />
}

export const Example = Template.bind({})
Example.args = {
  visible: true,
}
