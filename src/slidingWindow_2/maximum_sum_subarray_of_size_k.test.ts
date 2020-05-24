const max_sub_array_of_size_k2 = function (k: number, arr: number[]) {
  let max = 0
  let windowStart = 0, windowEnd = 0, sum = 0

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    let windowLength = windowEnd + 1 - windowStart
    sum += arr[windowEnd]
    if (windowLength > k) {
      sum -= arr[windowStart]
      windowStart++
    }
    max = Math.max(max, sum)
  }
  return max;
};

describe("max_sub_array_of_size_k", () => {
  it("Input: [2, 1, 5, 1, 3, 2], Output: 9", () => {
    const k = 3
    const arr = [2, 1, 5, 1, 3, 2]
    const output = 9
    expect(max_sub_array_of_size_k2(k, arr)).toBe(output)
  });

  it("Input: [2, 3, 4, 1, 5], Output: 9", () => {
    const k = 2
    const arr = [2, 3, 4, 1, 5]
    const output = 7
    expect(max_sub_array_of_size_k2(k, arr)).toBe(output)
  });
})

