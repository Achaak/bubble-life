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
      console.log(moduleConfig.name)
      const { ControllerConfig } = await import(moduleConfig.name)
      console.log(ControllerConfig)

      ModulesConfigList.push(ControllerConfig)
    } catch (e) {
      console.log(e)
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
    return <>Module not found</>
  }
  return container
}
