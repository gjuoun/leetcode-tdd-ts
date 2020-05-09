let hammingDistance1 = function (x: number, y: number): number {

  let result = 0
  for (let i = 0; i < 31; i++) {
    //last bit of x
    let bx = x % 2
    let yx = y % 2
    if (bx !== yx) result++
    x >>= 1
    y >>= 1
  }
  return result
};


let hammingDistance = function (x: number, y: number): number {
  let xor = x ^ y
  let ans = 0
  while (xor > 0) {
    if (xor % 2)
      ans++

    xor >>= 1
  }
  return ans
};

export { hammingDistance }