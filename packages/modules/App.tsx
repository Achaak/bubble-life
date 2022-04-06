import { ModulesConfig } from '@bubble/configs/modules'
import { styled } from '@bubble/styles'
import type { ModulePosition } from '@bubble/types'
import React, { useEffect, useState } from 'react'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 8,
  flex: 1,
})

const Top = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

const Center = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

const Bottom = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const Module = styled('div', {
  display: 'flex',
  padding: 8,
})

export const AppModules = (): JSX.Element => {
  const [modules, setModules] = useState<{
    topLeft: React.ReactNode[]
    top: React.ReactNode[]
    topRight: React.ReactNode[]
    centerLeft: React.ReactNode[]
    center: React.ReactNode[]
    centerRight: React.ReactNode[]
    bottomLeft: React.ReactNode[]
    bottom: React.ReactNode[]
    bottomRight: React.ReactNode[]
  }>({
    topLeft: [],
    top: [],
    topRight: [],
    centerLeft: [],
    center: [],
    centerRight: [],
    bottomLeft: [],
    bottom: [],
    bottomRight: [],
  })

  const getModules = async (position: ModulePosition): Promise<React.ReactNode[]> => {
    const modulesDOM: React.ReactNode[] = []

    const modulesConfig = ModulesConfig.filter((item) => item.position === position)

    for (const moduleConfig of modulesConfig) {
      try {
        const { default: ModuleContent } = await require(`./${moduleConfig.name}/App`)

        modulesDOM.push(
          <Module key={moduleConfig.name}>
            <ModuleContent {...moduleConfig.config} />
          </Module>
        )
      } catch {
        // ignore
      }
    }

    return modulesDOM
  }

  useEffect(() => {
    const initModules = async (): Promise<void> => {
      setModules({
        topLeft: await getModules('top-left'),
        top: await getModules('top'),
        topRight: await getModules('top-right'),
        centerLeft: await getModules('center-left'),
        center: await getModules('center'),
        centerRight: await getModules('center-right'),
        bottomLeft: await getModules('bottom-left'),
        bottom: await getModules('bottom'),
        bottomRight: await getModules('bottom-right'),
      })
    }

    initModules()
  }, [])

  return (
    <Container>
      <Top>
        <Content>{modules.topLeft}</Content>
        <Content>{modules.top}</Content>
        <Content>{modules.topRight}</Content>
      </Top>
      <Center>
        <Content>{modules.centerLeft}</Content>
        <Content>{modules.center}</Content>
        <Content>{modules.centerRight}</Content>
      </Center>
      <Bottom>
        <Content>{modules.bottomLeft}</Content>
        <Content>{modules.bottom}</Content>
        <Content>{modules.bottomRight}</Content>
      </Bottom>
    </Container>
  )
}
