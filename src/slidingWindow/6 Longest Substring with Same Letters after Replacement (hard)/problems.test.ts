
/**
Problem Statement#
Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".

Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".

Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

 */

import { length_of_longest_substring_same_qk } from "./problem.quokka";




describe("length_of_longest_substring_same_qk", () => {
  it("input = 'aabccbb', k = 2, output = 5;", () => {
    const input = "aabccbb", k = 2, output = 5;
    expect(length_of_longest_substring_same_qk(input, k)).toBe(output)
  });

  it("input = 'abbcb', k = 1, output = 4;", () => {
    const input = "abbcb", k = 1, output = 4;
    expect(length_of_longest_substring_same_qk(input, k)).toBe(output)
  });

  it("input = 'abccde', k = 1, output = 3;", () => {
    const input = "abccde", k = 1, output = 3;
    expect(length_of_longest_substring_same_qk(input, k)).toBe(output)
  });
})