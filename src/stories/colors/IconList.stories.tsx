import { Story, Meta } from '@storybook/react'

import { ColorExample } from './ColorList'

export default {
  title: 'Colors/List',
  component: ColorExample,
} as Meta

const Template: Story<void> = () => <ColorExample />

export const List = Template.bind({})
