export const random = ({
  max,
  min,
  round,
}: {
  min: number;
  max: number;
  round?: boolean;
}): number => {
  const randomValue = Math.random() * (max - min) + min;

  if (round) {
    return Math.round(randomValue);
  }

  return randomValue;
};
