import { globalStyles } from '@pikas-ui/styles';
import type { TextareaProps } from '@bubble/ui';
import { Textarea } from '@bubble/ui';
import type { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Inputs/Textarea',
  component: Textarea,
  argTypes: {
    onChange: {
      description: 'The function to be called when the textarea is changed',
      type: {
        name: 'function',
        required: false,
      },
    },
    borderRadius: {
      description: 'The border radius of the textarea',
      type: {
        name: 'enum',
        value: ['sm', 'md', 'lg'],
        required: false,
      },
    },
    borderSize: {
      description: 'The border size of the textarea',
      type: {
        name: 'enum',
        value: ['sm', 'md', 'lg'],
        required: false,
      },
    },
    defaultValue: {
      description: 'The default value of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    description: {
      description: 'The description of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    fontSize: {
      description: 'The font size of the textarea',
      type: {
        name: 'enum',
        value: ['sm', 'md', 'lg'],
        required: false,
      },
    },
    fullWidth: {
      description: 'Whether the textarea should be full width',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    id: {
      description: 'The id of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    label: {
      description: 'The label of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    padding: {
      description: 'The padding of the textarea',
      type: {
        name: 'enum',
        value: ['sm', 'md', 'lg'],

        required: false,
      },
    },
    placeholder: {
      description: 'The placeholder of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    setFieldValue: {
      description: 'The function to be called when the textarea is changed',
      type: {
        name: 'function',
        required: false,
      },
    },
    styles: {
      description: 'The styles of the textarea',
      type: {
        name: 'object',
        required: false,
      },
    },
    textError: {
      description: 'The error of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
  },
} as Meta<TextareaProps>;

const Template: Story<TextareaProps> = (args) => {
  globalStyles();

  return <Textarea {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  borderRadius: 2,
  borderSize: 'md',
  defaultValue: '',
  description: 'Description',
  fontSize: 'md',
  fullWidth: true,
  id: '',
  label: 'Label',
  onChange: (): void => {
    console.log('changed');
  },
  placeholder: 'Placeholder',
  padding: 'md',
  setFieldValue: (): void => {
    console.log('setFieldValue');
  },
  styles: {},
  textError: 'Test error',
};
