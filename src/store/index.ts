import { createHook } from 'overmind-react'
import * as bubble from './bubble'
import { namespaced } from 'overmind/config'
import { createOvermind, IConfig } from 'overmind'

export const config = namespaced({
  bubble,
})

declare module 'overmind' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Config extends IConfig<typeof config> {
    //
  }
}

export const overmind = createOvermind(config, {
  devtools: true, // defaults to 'localhost:3031'
})

export const useOvermind = createHook<typeof config>()
