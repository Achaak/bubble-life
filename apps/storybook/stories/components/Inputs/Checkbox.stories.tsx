import { customGlobalCss } from '@bubble/ui';
import type { CheckboxProps } from '@bubble/ui';
import { Checkbox } from '@bubble/ui';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {},
} as Meta<CheckboxProps>;

const Template: Story<CheckboxProps> = (args) => {
  customGlobalCss();

  return <Checkbox {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
