
const smallest_subarray_with_a_given_sum_2 = function (s: number, arr: number[]): number {

  let windowStart = 0, windowEnd = 0, sum = 0
  let minLength = Infinity

  for (windowEnd; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd]
    while (sum >= s) {
      let length = windowEnd + 1 - windowStart
      minLength = Math.min(minLength, length)
      sum -= arr[windowStart]
      windowStart++
    }

  }
  return minLength
};

// time complexity: O(n), space complexity: O(1)


describe("smallest_subarray_with_a_given_sum", () => {
  it("Input s=7, arr = [2, 1, 5, 2, 3, 2], output = 2", () => {
    const s = 7
    const arr = [2, 1, 5, 2, 3, 2]
    const output = 2
    expect(smallest_subarray_with_a_given_sum_2(s, arr)).toBe(output)
  });

  it("Input k = 7  arr = [2, 1, 5, 2, 8] output = 1", () => {
    const k = 7
    const arr = [2, 1, 5, 2, 8]
    const output = 1
    expect(smallest_subarray_with_a_given_sum_2(k, arr)).toBe(output)
  });

  it("Input k = 8 arr = [3, 4, 1, 1, 6]  output = 3", () => {
    const k = 8
    const arr = [3, 4, 1, 1, 6]
    const output = 3
    expect(smallest_subarray_with_a_given_sum_2(k, arr)).toBe(output)
  });
})


