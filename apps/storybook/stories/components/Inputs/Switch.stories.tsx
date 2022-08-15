import { customGlobalCss } from '@bubble/ui';
import type { SwitchProps } from '@bubble/ui';
import { Switch } from '@bubble/ui';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Inputs/Switch',
  component: Switch,
  argTypes: {},
} as Meta<SwitchProps>;

const Template: Story<SwitchProps> = (args) => {
  customGlobalCss();

  return <Switch {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
