import type { Story, Meta } from '@storybook/react'

import { ColorExample } from './ColorList'

export default {
  title: 'Colors/List',
  component: ColorExample,
} as Meta

const Template: Story = (args) => <ColorExample {...args} />

export const List = Template.bind({})
List.args = {}
