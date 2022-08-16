import React from 'react';
import type { IconProps } from '@bubble/ui';
import { styled, IconByName, ButtonIcon } from '@bubble/ui';

const possibilities = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  "Don't count on it.",
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
];

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const ResultView = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: '$HIGH',
  color: '$WHITE',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$EM-XXX-LARGE',
  fontWeight: '$BOLD',
  backgroundColor: '$BLACK_LIGHT',
  transition: 'all 1500ms',
  opacity: 0,

  variants: {
    visible: {
      true: {
        opacity: 1,
        pointerEvents: 'initial',
      },
    },
  },
});

const Icon: React.FC<IconProps> = (props) => {
  return (
    <IconByName name="fluent-emoji-high-contrast:pool-8-ball" {...props} />
  );
};

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const [message, setMessage] = React.useState<string>();
  const [visible, setVisible] = React.useState(false);

  const handleCLick = (): void => {
    const res = possibilities[Math.floor(Math.random() * possibilities.length)];
    setMessage(res);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  return (
    <Container>
      <ResultView visible={visible}>{message}</ResultView>
      <ButtonIcon onClick={handleCLick} Icon={Icon} />
    </Container>
  );
};
