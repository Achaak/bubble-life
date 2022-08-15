import { customGlobalCss } from '@bubble/ui';
import type { TextfieldProps } from '@bubble/ui';
import { Textfield } from '@bubble/ui';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Inputs/Textfield',
  component: Textfield,
  argTypes: {},
} as Meta<TextfieldProps>;

const Template: Story<TextfieldProps> = (args) => {
  customGlobalCss();

  return <Textfield {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
