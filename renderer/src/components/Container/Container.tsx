import { GlobalConfig } from '@configs/global'
import { BubbleCore } from '@src/core'
import { persistor, store } from '@src/redux/store'
import { styled } from '@src/styles/css'
import React, { useEffect } from 'react'
import FPSStats from 'react-fps-stats'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const ContainerDOM = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  cursor: process.env.NODE_ENV === 'development' ? 'default' : 'none',
  userSelect: 'none',
})

export const Container: React.FC = ({ children }) => {
  useEffect(() => {
    new BubbleCore()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {GlobalConfig.development.showFPS ? <FPSStats /> : null}

        <ContainerDOM>{children}</ContainerDOM>
      </PersistGate>
    </Provider>
  )
}
