import { InfoIcon } from './info'
import { SVGComponentIcon } from './types'
import React from 'react'

export { InfoIcon }

const tuple = <T extends string[]>(...args: T): T => args
export const IconsList = tuple('InfoIcon')
export type IconsType = typeof IconsList[number]

export const IconsComponentList: Record<IconsType, React.FC<SVGComponentIcon>> = {
  InfoIcon,
}

IconsComponentList
