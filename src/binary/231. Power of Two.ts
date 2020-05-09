const isPowerOfTwo = (x: number): boolean => {
  if(x<= 0) return false
  return x.toString(2).match(/1/g)!.length === 1
};

export { isPowerOfTwo };
