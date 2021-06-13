import React from 'react'
import { Provider } from 'overmind-react'
import { overmind } from '@src/store'

export const ProviderOvermind: React.FC = ({ children }) => {
  return <Provider value={overmind}>{children}</Provider>
}
