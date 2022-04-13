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
      const { Config } = await import(moduleConfig.name)

      ModulesConfigList.push(Config)
    } catch {
      console.log(`Module ${moduleConfig.name} not found`)
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
        const { ControllerContainer } = await import(name)

        setContainer(<ControllerContainer />)
      } catch {
        console.log(`Module ${name} not found`)
      }
    }

    initContainer()
  }, [name])

  if (!container) {
    return <></>
  }
  return container
}
