import { customGlobalCss } from '@bubble/ui';
import type { ButtonIconProps } from '@bubble/ui';
import { ButtonIcon } from '@bubble/ui';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Inputs/ButtonIcon',
  component: ButtonIcon,
  argTypes: {},
} as Meta<ButtonIconProps>;

const Template: Story<ButtonIconProps> = (args) => {
  customGlobalCss();

  return <ButtonIcon {...args}>ButtonIcon</ButtonIcon>;
};

export const Example = Template.bind({});
Example.args = {
  onClick: (): void => {
    console.log('clicked');
  },
  type: 'button',
};
