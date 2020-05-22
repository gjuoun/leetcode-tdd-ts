const numberOfOneBits = (x: number): number => {
  if (!x) return 0

  let ones: number = x.toString(2).match(/1/g)!.length
  return ones
};

export { numberOfOneBits };
