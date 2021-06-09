import React from 'react'
import { BodyDefault } from './Default'

export const Body: React.FC = () => {
  const getBody = (): React.ReactNode => {
    return <BodyDefault />
  }

  return <>{getBody()}</>
}
