import { ModulesConfig } from '@bubble/configs-modules'
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
    if (moduleConfig.module?.Controller) {
      ModulesConfigList.push({
        name: moduleConfig.module.name,
        icon: moduleConfig.module.icon,
      })
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
      const m = ModulesConfig.find((item) => item.module?.name === name)

      if (m && m.module.Controller) {
        setContainer(<m.module.Controller />)
      } else {
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
