export const fahrenheitToCelsius = (value: number) => {
  return (((value - 32) * 5) / 9).toFixed(2);
};
