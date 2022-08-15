import { customGlobalCss, styled } from '@bubble/ui';
import type { SeparatorProps } from '@bubble/ui';
import { Separator } from '@bubble/ui';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Separators',
  component: Separator,
  argTypes: {
    orientation: {
      description: 'The orientation of the separator',
      type: {
        name: 'enum',
        value: ['vertical', 'horizontal'],
        required: false,
      },
    },
    style: {
      description: 'The style of the separator',
      type: {
        name: 'object',
        value: {},
        required: false,
      },
    },
  },
} as Meta<SeparatorProps>;

const Container = styled('div', {
  height: 500,
});

const Template: Story<SeparatorProps> = (args) => {
  customGlobalCss();

  return (
    <Container>
      <Separator {...args} />
    </Container>
  );
};

export const Example = Template.bind({});
Example.args = {
  orientation: 'horizontal',
  style: {},
};
