const numberOfOneBits = (x: number): number => {
  if (!x) return 0

  let ones: number = x.toString(2).match(/1/g)!.length
  return ones
};

console.log(numberOfOneBits(parseInt("00000000000000000000000010000000", 2))
)
export { numberOfOneBits };
