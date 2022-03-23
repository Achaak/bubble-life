export const countInElementslist = <T extends string | null>(
  list: {
    name: T
    importance: number
  }[]
): T => {
  const arr = list.reduce<
    {
      name: T
      importance: number
    }[]
  >((acc, item) => {
    const existItem = acc.find(({ name }) => item.name === name)
    if (existItem) {
      existItem.importance += item.importance
    } else {
      acc.push(item)
    }
    return acc
  }, [])

  const max = arr.reduce((acc, item) => {
    if (item.importance > acc.importance) {
      return item
    }
    return acc
  })

  return max.name
}
