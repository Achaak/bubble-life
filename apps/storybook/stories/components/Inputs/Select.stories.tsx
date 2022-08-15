import { customGlobalCss } from '@bubble/ui';
import type { SelectProps } from '@bubble/ui';
import { Select } from '@bubble/ui';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
  argTypes: {},
} as Meta<SelectProps>;

const Template: Story<SelectProps> = (args) => {
  customGlobalCss();

  return <Select {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
