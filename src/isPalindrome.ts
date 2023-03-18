export const isPalindrome = (x: number): boolean => {
  const array = [...x.toString()];
  const reversedArray = [...x.toString()].reverse();

  return array.every((value, index) => value === reversedArray[index]);
};
