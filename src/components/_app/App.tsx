import React from 'react'
import { useRouter } from 'next/router'
import { Container } from '..'

const Containers = [
  {
    path: '/_error',
    Container: null,
  },
  {
    path: '/',
    Container: Container,
  },
]

export const App: React.FC = ({ children }) => {
  const router = useRouter()

  const getContent = (): React.ReactNode => {
    for (let i = 0; i < Containers.length; i++) {
      const { path, Container } = Containers[i]

      if (router.pathname.includes(path)) {
        if (Container) {
          return <Container>{children}</Container>
        } else {
          return children
        }
      }
    }
  }

  return <>{getContent()}</>
}
