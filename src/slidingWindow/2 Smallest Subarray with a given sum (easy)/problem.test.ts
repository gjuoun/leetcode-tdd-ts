const max_sub_array_of_size_k = (k: number, arr: number[]): number => {
  let sum = 0, max = 0, startIndex = 0

  for (let endIndex = 0; endIndex < arr.length; endIndex++) {

    sum = sum + arr[endIndex]

    if (endIndex > k - 1) {
      sum = sum - arr[startIndex]
      max = Math.max(max, sum)
      startIndex++
    }
  }

  return max
}



describe("max_sub_array_of_size_k", () => {
  it("Input: [2, 1, 5, 1, 3, 2], k = 3,Output: 9", () => {
    const k = 3
    const arr = [2, 1, 5, 1, 3, 2]
    const output = 9
    expect(max_sub_array_of_size_k(k, arr)).toBe(output)
  });

  it("Input: [2, 3, 4, 1, 5], k = 2, Output: 7", () => {
    const k = 2
    const arr = [2, 3, 4, 1, 5]
    const output = 7
    expect(max_sub_array_of_size_k(k, arr)).toBe(output)
  });
})


