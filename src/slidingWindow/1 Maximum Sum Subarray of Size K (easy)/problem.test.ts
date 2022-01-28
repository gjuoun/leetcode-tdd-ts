/*
Problem Statement#
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].


Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

*/

const maximum_sum_subarray_of_size_k = (input: number[], k: number): number => {
  let sum = 0, windowStart = 0
  let maximum = 0

  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    sum += input[windowEnd] //?

    if (windowEnd > (k - 1)) {
      // subtract the left most item
      sum -= input[windowStart]
      windowStart += 1 //?
    }

    maximum = Math.max(maximum, sum) //?
  }

  return maximum
}



describe("maximum_sum_subarray_of_size_k", () => {
  it('', () => {
    let input = [2, 1, 5, 1, 3, 2], k = 3, output = 9
    expect(maximum_sum_subarray_of_size_k(input, k)).toBe(output)
  })

  it('', () => {
    let input = [2, 3, 4, 1, 5], k = 2, output = 7
    expect(maximum_sum_subarray_of_size_k(input, k)).toBe(output)
  })
})


