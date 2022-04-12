import { ModulesConfig } from '@bubble/configs'
import { useEffect, useState } from 'react'

export const ModuleControllerList = async (): Promise<
  {
    name: string
    icon: string
  }[]
> => {
  const ModulesConfigList: {
    name: string
    icon: string
  }[] = []

  for (const moduleConfig of ModulesConfig) {
    try {
      const { Config } = await require(`./../${moduleConfig.name}/dist/index`)

      ModulesConfigList.push(Config)
    } catch {
      // ignore
    }
  }

  return ModulesConfigList
}

interface ControllerModuleProps {
  name: string
}
export const ControllerModule: React.FC<ControllerModuleProps> = ({ name }) => {
  const [container, setContainer] = useState<JSX.Element>()

  useEffect(() => {
    const initContainer = async (): Promise<void> => {
      try {
        const { ControllerContainer } = await require(`./../${name}/dist/index`)

        setContainer(<ControllerContainer />)
      } catch {
        // ignore
      }
    }

    initContainer()
  }, [name])

  if (!container) {
    return <></>
  }
  return container
}
