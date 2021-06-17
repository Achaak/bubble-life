import { styled } from '@src/styles'
import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'
import 'dayjs/locale'
import React, { useEffect, useState } from 'react'
import { GlobalConfig } from '@configs/global'
dayjs.extend(updateLocale)
dayjs.locale(GlobalConfig.lang)

const ContainerDOM = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const Timer = styled('span', {
  fontSize: '5em',
  lineHeight: '1em',
})

const DateDOM = styled('span', {
  fontSize: '1.5em',
  lineHeight: '1em',
  textTransform: 'capitalize',
})

interface CustomProps {
  dateFormat: string
}

export const Container: React.FC<CustomProps> = ({ dateFormat }) => {
  const [loaded, setLoaded] = useState(false)
  const [timer, setTimer] = useState<string | null>(null)
  const [date, setDate] = useState<string | null>(null)

  const convertToLocale = async (date: Date, locale: string): Promise<dayjs.Dayjs> => {
    await require(`dayjs/locale/${locale}.js`)

    return dayjs(date).locale(locale)
  }

  useEffect(() => {
    const timer = setInterval(async () => {
      const date = await convertToLocale(new Date(), GlobalConfig.lang)

      setTimer(date.format('HH:mm'))
      setDate(date.format(dateFormat))

      if (!loaded) {
        setLoaded(true)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!loaded) return null
  return (
    <ContainerDOM>
      <DateDOM>{date}</DateDOM>
      <Timer>{timer}</Timer>
    </ContainerDOM>
  )
}
