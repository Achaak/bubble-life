import { Core } from '@src/core'
import { store } from '@src/redux/store'
import { styled } from '@src/styles/css'
import React, { useEffect } from 'react'
import { ProviderOvermind } from '../ProviderOvermind'
import { Provider } from 'react-redux'

const ContainerDOM = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
})

export const Container: React.FC = ({ children }) => {
  useEffect(() => {
    new Core()
  }, [])

  return (
    <Provider store={store}>
      <ProviderOvermind>
        <ContainerDOM>{children}</ContainerDOM>
      </ProviderOvermind>
    </Provider>
  )
}
