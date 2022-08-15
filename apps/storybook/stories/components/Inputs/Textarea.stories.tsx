import { customGlobalCss } from '@bubble/ui';
import type { TextareaProps } from '@bubble/ui';
import { Textarea } from '@bubble/ui';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Inputs/Textarea',
  component: Textarea,
  argTypes: {},
} as Meta<TextareaProps>;

const Template: Story<TextareaProps> = (args) => {
  customGlobalCss();

  return <Textarea {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
