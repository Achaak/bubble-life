import { styled } from '@bubble/styles';

const Container = styled('h1', {
  all: 'unset',
  color: '$BLACK',
  fontSize: '$EM-XX-LARGE',
  fontWeight: '$BOLD',
  letterSpacing: '$SMALL',
});

export const Logo: React.FC = () => {
  return <Container>Bubble Life</Container>;
};
