import { Colors, styled } from '@bubble/styles'

const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
})

const Element = styled('div', {
  margin: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '12%',
})

const ColorBlock = styled('div', {
  height: 50,
  width: 50,
  border: '1px solid gray',
})

const Name = styled('span', {
  marginTop: 10,
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: '$EM-X-SMALL',
})

export const ColorExample = (): JSX.Element => {
  return (
    <Container>
      {Object.keys(Colors).map((item, key) => (
        <Element key={key}>
          <ColorBlock
            css={{
              backgroundColor: Colors[item as keyof typeof Colors],
            }}
          />
          <Name>{item}</Name>
        </Element>
      ))}
    </Container>
  )
}
