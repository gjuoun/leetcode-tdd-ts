/*
Problem Statement#
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Example 2:

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example 3:

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] 
or [1, 1, 6].

*/

const smallest_subarray_with_a_greater_sum = (input: number[], s: number): number => {
  let minLength = Infinity, windowStart = 0
  let windowSum = 0


  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    windowSum += input[windowEnd] //?

    while (windowSum >= s /*?*/) {
      // shrink the window
      minLength = Math.min(minLength, (windowEnd - windowStart) + 1) //?
      windowSum -= input[windowStart] //?
      windowStart += 1

    }
  }

  return minLength
}




describe("smallest_subarray_with_a_greater_sum", () => {
  it("", () => {
    const s = 7
    const input = [2, 1, 5, 2, 3, 2]
    const output = 2
    expect(smallest_subarray_with_a_greater_sum(input, s)).toBe(output)
  });

  it("", () => {
    const s = 7
    const input = [2, 1, 5, 2, 8]
    const output = 1
    expect(smallest_subarray_with_a_greater_sum(input, s)).toBe(output)
  });

  it("", () => {
    const s = 8
    const input = [3, 4, 1, 1, 6]
    const output = 3
    expect(smallest_subarray_with_a_greater_sum(input, s)).toBe(output)
  });
})


