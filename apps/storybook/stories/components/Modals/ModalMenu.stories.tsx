import { globalStyles } from '@bubble/styles'
import type { ModalMenuProps } from '@bubble/ui/src/components/Modals/Menu'
import { ModalMenu } from '@bubble/ui/src/components/Modals/Menu'
import type { Meta, Story } from '@storybook/react'

export default {
  title: 'Components/Modals/Menu',
  component: ModalMenu,
  argTypes: {},
} as Meta<ModalMenuProps>

const Template: Story<ModalMenuProps> = (args) => {
  globalStyles()

  return <ModalMenu {...(args as never)} />
}

export const Example = Template.bind({})
Example.args = {
  visible: true,
}
