export const makeCode = (value: string, suit: string): string => {
  const isNumber = Number(value) > 0;
  const preparedValue = isNumber ? value : value[0];

  return `${preparedValue}${suit[0]}`;
};
