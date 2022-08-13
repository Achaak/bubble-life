import { globalStyles } from '@pikas-ui/styles'
import type { ButtonProps } from '@bubble/ui'
import { Button } from '@bubble/ui'
import type { Meta, Story } from '@storybook/react'

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {
    onClick: {
      description: 'The function to be called when the button is clicked',
      type: {
        name: 'function',
        required: false,
      },
    },
    type: {
      description: 'The type of button',
      type: {
        name: 'enum',
        value: ['button', 'submit', 'reset'],
        required: false,
      },
    },
  },
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => {
  globalStyles()

  return <Button {...(args as never)}>Button</Button>
}

export const Example = Template.bind({})
Example.args = {
  onClick: (): void => {
    console.log('clicked')
  },
  type: 'button',
}
