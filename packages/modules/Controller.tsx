import { ModulesConfig } from '@bubble/configs/modules'
import { useEffect, useState } from 'react'
import { JsxAttributeLike } from 'typescript'

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
      const { Config } = await require(`./${moduleConfig.name}/Controller`)

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
export const ControllerModule = ({ name }: ControllerModuleProps): JSX.Element => {
  const [container, setContainer] = useState<JSX.Element>()

  useEffect(() => {
    const initContainer = async (): Promise<void> => {
      try {
        const { default: ModuleContent } = await require(`./${name}/Controller`)

        setContainer(<ModuleContent />)
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
