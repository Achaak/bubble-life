import { customGlobalCss } from '@bubble/ui';
import type { SliderProps } from '@bubble/ui';
import { Slider } from '@bubble/ui';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Inputs/Slider',
  component: Slider,
  argTypes: {},
} as Meta<SliderProps>;

const Template: Story<SliderProps> = (args) => {
  customGlobalCss();

  return <Slider {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
