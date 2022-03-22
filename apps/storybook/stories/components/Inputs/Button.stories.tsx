import { globalStyles } from '@bubble/styles'
import type { ButtonProps } from '@bubble/ui/src/components/Inputs/Button'
import { Button } from '@bubble/ui/src/components/Inputs/Button'
import type { Meta, Story } from '@storybook/react'

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {
    type: {
      description: 'Type of button',
      options: ['submit', 'button'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
      required: false,
    },
    onClick: {
      description: 'Function to call when button is clicked',
      required: false,
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta

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
