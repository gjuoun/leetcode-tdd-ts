
const max_sub_array_of_size_k = function (k: number, arr: number[]): number {
  let sum = 0, max = 0, start = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (i >= k - 1) {
      max = Math.max(max, sum)
      sum = sum - arr[start]
      start++;
    }
  }
  return max
};



describe("max_sub_array_of_size_k", () => {
  it("Input: [2, 1, 5, 1, 3, 2], Output: 9", () => {
    const k = 3
    const arr = [2, 1, 5, 1, 3, 2]
    const output = 9
    expect(max_sub_array_of_size_k(k, arr)).toBe(output)
  });

  it("Input: [2, 3, 4, 1, 5], Output: 9", () => {
    const k = 2
    const arr =[2, 3, 4, 1, 5]
    const output = 7
    expect(max_sub_array_of_size_k(k, arr)).toBe(output)
  });
})


