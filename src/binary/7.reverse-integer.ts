const reverse = (x: number) => {
  if (!x) return 0

  let stack: string[] = x.toString().split('')
  let arr: string[] = []

  while (stack.length) {
    arr.push(stack.pop()!)
  }

  const result = parseInt(arr.join(''))

  if (result < - (2 ** 31) || result > 2 ** 31 - 1)
    return 0

  return x > 0 ? result : -result;
};

export { reverse };
