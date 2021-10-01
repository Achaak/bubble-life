const tuple = <T extends string[]>(...args: T): T => args
export const IconsList = tuple('InfoIcon')
export type IconsType = typeof IconsList[number]
