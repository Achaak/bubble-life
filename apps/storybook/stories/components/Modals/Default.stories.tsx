import { globalStyles } from '@bubble/styles'
import type { ModalProps } from '@bubble/ui'
import { Modal } from '@bubble/ui'
import type { Meta, Story } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Components/Modals/Default',
  component: Modal,
  argTypes: {
    visible: {
      description: 'Whether the modal is visible',
      type: {
        name: 'boolean',
        required: true,
      },
    },
    closeClickOutside: {
      description: 'Whether the modal should close when clicking outside',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    hasCloseBtn: {
      description: 'Whether the modal should have a close button',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    onClose: {
      description: 'The function to be called when the modal is closed',
      type: {
        name: 'function',
        required: true,
      },
    },
    onOpen: {
      description: 'The function to be called when the modal is opened',
      type: {
        name: 'function',
        required: false,
      },
    },
    gap: {
      description: 'The gap between the modal and the content',
      type: {
        name: 'object',
        value: {
          container: {
            name: 'enum',
            value: ['sm', 'md', 'lg', 'no-gap'],
            required: false,
          },
          content: {
            name: 'enum',
            value: ['sm', 'md', 'lg', 'no-gap'],
            required: false,
          },
          header: {
            name: 'enum',
            value: ['sm', 'md', 'lg', 'no-gap'],
            required: false,
          },
          footer: {
            name: 'enum',
            value: ['sm', 'md', 'lg', 'no-gap'],
            required: false,
          },
        },
        required: false,
      },
    },
    content: {
      description: 'The content of the modal',
      type: {
        name: 'other',
        value: 'React.ReactNode',
        required: false,
      },
    },
    header: {
      description: 'The header of the modal',
      type: {
        name: 'other',
        value: 'React.ReactNode',
        required: false,
      },
    },
    footer: {
      description: 'The footer of the modal',
      type: {
        name: 'other',
        value: 'React.ReactNode',
        required: false,
      },
    },
    height: {
      description: 'The height of the modal',
      type: {
        name: 'number',
        required: false,
      },
    },
    width: {
      description: 'The width of the modal',
      type: {
        name: 'number',
        required: false,
      },
    },
    padding: {
      description: 'The padding of the modal',
      type: {
        name: 'object',
        value: {
          container: {
            name: 'enum',
            value: ['sm', 'md', 'lg', 'no-padding'],
            required: false,
          },
          content: {
            name: 'enum',
            value: ['sm', 'md', 'lg', 'no-padding'],
            required: false,
          },
          header: {
            name: 'enum',
            value: ['sm', 'md', 'lg', 'no-padding'],
            required: false,
          },
          footer: {
            name: 'enum',
            value: ['sm', 'md', 'lg', 'no-padding'],
            required: false,
          },
        },
        required: false,
      },
    },
    styles: {
      description: 'The styles of the modal',
      type: {
        name: 'object',
        value: {
          container: {
            name: 'object',
            value: {},
            required: false,
          },
          content: {
            name: 'object',
            value: {},
            required: false,
          },
          header: {
            name: 'object',
            value: {},
            required: false,
          },
          footer: {
            name: 'object',
            value: {},
            required: false,
          },
        },
        required: false,
      },
    },
  },
} as Meta<ModalProps>

const Template: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState(args.visible)
  globalStyles()

  return (
    <Modal
      {...(args as never)}
      visible={visible}
      onClose={(): void => {
        setVisible(false)
      }}
      onOpen={(): void => {
        setVisible(true)
      }}
    />
  )
}

export const Example = Template.bind({})
Example.args = {
  visible: true,
  closeClickOutside: true,
  gap: {
    container: 'md',
    content: 'md',
    footer: 'md',
    header: 'md',
  },
  onClose: (): void => {
    console.log('closed')
  },
  onOpen: (): void => {
    console.log('opened')
  },
  styles: {
    container: {},
    header: {},
    content: {},
    footer: {},
  },
  padding: {
    container: 'md',
    content: 'md',
    footer: 'md',
    header: 'md',
  },
  hasCloseBtn: true,
  height: 500,
  width: 500,
  content: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, ipsum eu
        dignissim sodales, nisi nisi aliquet nunc, quis congue erat nunc euismod erat.
      </p>
    </div>
  ),
  footer: (
    <div>
      <p>Eiusmod velit laboris incididunt aute.</p>
    </div>
  ),
  header: (
    <div>
      <p>
        Do magna Lorem officia reprehenderit nisi ipsum aliqua ipsum fugiat qui excepteur veniam
        voluptate.
      </p>
    </div>
  ),
}
