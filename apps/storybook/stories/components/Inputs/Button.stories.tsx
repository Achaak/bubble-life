import { customGlobalCss } from '@bubble/ui';
import type { ButtonProps } from '@bubble/ui';
import { Button } from '@bubble/ui';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {},
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => {
  customGlobalCss();

  return <Button {...args}>Button</Button>;
};

export const Example = Template.bind({});
Example.args = {
  onClick: (): void => {
    console.log('clicked');
  },
};
