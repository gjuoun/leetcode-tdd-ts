const reverseBits = (x: number): number => {
  if (!x) return 0

  let stack: string[] = x.toString(2).split('')
  // .padStart(32, "0").split('').reverse()
  let arr: string[] = []
  while (arr.length < 32) {
    if (stack.length > 0)
      arr.push(stack.pop()!)
    else
      arr.push("0")
  }

  return parseInt(arr.join(''), 2)
};


export { reverseBits };
