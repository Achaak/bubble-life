import { SocketContext } from '@/components/components/SocketProvider';
import { LayoutDefault } from '@/components/layouts/default';
import { Button, Textarea } from '@bubble/ui';
import React, { useContext, useState } from 'react';

import type { NextPageWithLayout } from './_app';

const Message: NextPageWithLayout = () => {
  const [messageValue, setMessageValue] = useState('');
  const socket = useContext(SocketContext);

  const sendMessage = (): void => {
    socket?.emit('message', { content: messageValue });
  };
  return (
    <>
      <Textarea onChange={(e): void => setMessageValue(e.target.value)} />
      <Button onClick={sendMessage}>Send Message</Button>
    </>
  );
};

Message.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Message;
