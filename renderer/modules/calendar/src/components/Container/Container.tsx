import { styled } from '@src/styles'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

const ContainerDOM = styled('div', {})

const Timer = styled('span', {
  display: 'flex',
  alignItems: 'flex-end',
  fontSize: '6em',
  lineHeight: '1em',
})

export const Container: React.FC = () => {
  const [loaded, setLoaded] = useState(false)
  const [hours, setHours] = useState<number | null>(null)
  const [minutes, setMinutes] = useState<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const date = dayjs()

      setHours(date.hour())
      setMinutes(date.minute())

      if (!loaded) {
        setLoaded(true)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!loaded) return null
  return (
    <ContainerDOM>
      <Timer>
        {hours}:{minutes}
      </Timer>
    </ContainerDOM>
  )
}
