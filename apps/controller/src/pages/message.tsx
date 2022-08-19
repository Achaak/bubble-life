import { SocketContext } from '@/components/components/SocketProvider';
import { LayoutDefault } from '@/components/layouts/default';
import { Button, Textarea } from '@bubble/ui';
import { styled } from '@bubble/styles';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup';

import type { NextPageWithLayout } from './_app';

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  customRowGap: 8,
});

const Message: NextPageWithLayout = () => {
  const socket = useContext(SocketContext);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: Yup.object().shape({
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: ({ message }) => {
      socket?.emit('message', { content: message });
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea id="message" onChange={handleChange} />
      <Button type="submit" disabled={!values.message.length}>
        Send Message
      </Button>
    </Form>
  );
};

Message.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Message;
