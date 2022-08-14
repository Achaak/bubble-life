import { GlobalConfig } from '@bubble/configs';
import { styled } from '@bubble/ui';
import dayjs from 'dayjs';
import 'dayjs/locale';
import updateLocale from 'dayjs/plugin/updateLocale';
import React, { useEffect, useState } from 'react';

dayjs.extend(updateLocale);
dayjs.locale(GlobalConfig.lang);

const ContainerDOM = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const Timer = styled('span', {
  fontSize: '5em',
  lineHeight: '1em',
});

const DateDOM = styled('span', {
  fontSize: '1.5em',
  lineHeight: '1em',
  textTransform: 'capitalize',
  marginBottom: 4,
});

export interface AppProps {
  dateFormat: string;
}

export const App: React.FC<AppProps> = ({ dateFormat }) => {
  const [loaded, setLoaded] = useState(false);
  const [timer, setTimer] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);

  const convertToLocale = async (
    date: Date,
    locale: string
  ): Promise<dayjs.Dayjs> => {
    await import(`dayjs/locale/${locale}.js`);

    return dayjs(date).locale(locale);
  };

  useEffect(() => {
    const timer = setInterval(async () => {
      const date = await convertToLocale(new Date(), GlobalConfig.lang);

      setTimer(date.format('HH:mm'));
      setDate(date.format(dateFormat));

      if (!loaded) {
        setLoaded(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!loaded) {
    return <></>;
  }
  return (
    <ContainerDOM>
      <DateDOM>{date}</DateDOM>
      <Timer>{timer}</Timer>
    </ContainerDOM>
  );
};
