import type { TextProps } from '@bubble/ui'
import { Text, TextComponentType, TextVariantType } from '@bubble/ui'
import { globalStyles, styled } from '@pikas-ui/styles'
import type { Story, Meta } from '@storybook/react'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: {
      description: 'Children',
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
    href: {
      description: 'Href',
      type: {
        name: 'string',
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
    variant: {
      description: 'Variant',
      type: {
        name: 'enum',
        value: Object.keys(TextVariantType),
        required: false,
      },
    },
    component: {
      description: 'Component',
      type: {
        name: 'enum',
        value: Object.keys(TextComponentType),
        required: true,
      },
    },
  },
} as Meta<TextProps>

const Top = styled('div', {
  marginBottom: 20,
})

const Component = styled('div', {
  marginBottom: 20,
})

const Variant = styled('div', {
  marginBottom: 20,
})

const Element = styled('div', {
  margin: '10px 0',
})

const Label = styled('span', {})

const Template: Story<TextProps> = (args) => {
  globalStyles()

  return (
    <>
      <Top>
        <Text {...(args as never)} />
      </Top>

      <Component>
        <Element>
          <Label>Component: span</Label>
          <Text component="span">Hello world</Text>
        </Element>

        <Element>
          <Label>Component: a</Label>
          <Text component="a">Hello world</Text>
        </Element>

        <Element>
          <Label>Component: li</Label>
          <Text component="li">Hello world</Text>
        </Element>

        <Element>
          <Label>Component: p</Label>
          <Text component="p">Hello world</Text>
        </Element>

        <Element>
          <Label>Component: label</Label>
          <Text component="label">Hello world</Text>
        </Element>
      </Component>

      <Variant>
        <Element>
          <Label>Variant: error</Label>
          <Text component="span" variant="error">
            Hello world
          </Text>
        </Element>
        <Element>
          <Label>Variant: info</Label>
          <Text component="span" variant="info">
            Hello world
          </Text>
        </Element>
      </Variant>
    </>
  )
}

export const Example = Template.bind({})
Example.args = {
  children: 'Hello world',
  component: 'span',
  dangerouslySetInnerHTML: undefined,
  href: undefined,
  style: {},
  variant: undefined,
}
