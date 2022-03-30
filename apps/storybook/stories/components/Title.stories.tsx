import type { TitleProps } from '@bubble/ui'
import { WhiteSpaceType } from '@bubble/ui'
import { Title, TitleComponentType, TitleVariantType } from '@bubble/ui'
import { globalStyles, styled } from '@bubble/styles'
import type { Story, Meta } from '@storybook/react'

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    children: {
      description: 'Children',
      type: {
        name: 'other',
        required: false,
      },
    },
    dangerouslySetInnerHTML: {
      description: 'Dangerously set inner HTML',
      type: {
        name: 'string',
        required: false,
      },
    },
    style: {
      description: 'Style',
      type: {
        name: 'object',
        required: false,
      },
    },
    id: {
      description: 'Id',
      type: {
        name: 'string',
        required: false,
      },
    },
    whiteSpace: {
      description: 'White space',
      type: {
        name: 'enum',
        value: Object.keys(WhiteSpaceType),
        required: false,
      },
    },
    variant: {
      description: 'Variant',
      type: {
        name: 'enum',
        value: Object.keys(TitleVariantType),
        required: false,
      },
    },
    component: {
      description: 'Component',
      type: {
        name: 'enum',
        value: Object.keys(TitleComponentType),
        required: true,
      },
    },
  },
} as Meta<TitleProps>

const Top = styled('div', {
  marginBottom: 20,
})

const Component = styled('div', {
  marginBottom: 20,
})

const Element = styled('div', {
  margin: '10px 0',
})

const Label = styled('span', {})

const Template: Story<TitleProps> = (args) => {
  globalStyles()

  return (
    <>
      <Top>
        <Title {...(args as never)} />
      </Top>

      <Component>
        <Element>
          <Label>Component: h1</Label>
          <Title component="h1">{args.children}</Title>
        </Element>

        <Element>
          <Label>Component: h2</Label>
          <Title component="h2">{args.children}</Title>
        </Element>

        <Element>
          <Label>Component: h3</Label>
          <Title component="h3">{args.children}</Title>
        </Element>

        <Element>
          <Label>Component: h4</Label>
          <Title component="h4">{args.children}</Title>
        </Element>

        <Element>
          <Label>Component: h5</Label>
          <Title component="h5">{args.children}</Title>
        </Element>
      </Component>
    </>
  )
}

export const Example = Template.bind({})
Example.args = {
  children: 'Hello world',
  whiteSpace: 'normal',
  component: 'h1',
  id: 'title',
  style: {},
  variant: 'h1',
}
