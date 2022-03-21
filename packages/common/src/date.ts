export const dateToMs = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}): number => {
  let ms = 0

  if (days) {
    ms += days * 24 * 60 * 60 * 1000
  }
  if (hours) {
    ms += hours * 60 * 60 * 1000
  }
  if (minutes) {
    ms += minutes * 60 * 1000
  }
  if (seconds) {
    ms += seconds * 1000
  }

  return ms
}
