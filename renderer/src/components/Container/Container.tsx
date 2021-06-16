import { BubbleCore } from '@src/core'
import { store } from '@src/redux/store'
import { styled } from '@src/styles/css'
import React, { useEffect } from 'react'
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
    new BubbleCore()
  }, [])

  return (
    <Provider store={store}>
      <ContainerDOM>{children}</ContainerDOM>
    </Provider>
  )
}
