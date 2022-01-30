/**
Problem Statement#
Given a string, find the length of the longest substring, which has all distinct characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".

Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".

Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".

 */

import { longest_substring_with_distinct_characters_quokka } from "./problem.quokka";


// time complexity: O(n), space complexity: O(1)

describe("no_repeat_substring", () => {
  it("Input= 'aabccbb', output = 3", () => {
    const input = "aabccbb", output = 3
    expect(longest_substring_with_distinct_characters_quokka(input)).toBe(output)
  });

  it("input = 'abbbb', output = 2", () => {
    const input = "abbbb", output = 2
    expect(longest_substring_with_distinct_characters_quokka(input)).toBe(output)
  });

  it("input = 'abccde', output = 3", () => {
    const input = "abccde", output = 3
    expect(longest_substring_with_distinct_characters_quokka(input)).toBe(output)
  });

  it("input = 'abcbacb', output = 3", () => {
    const input = "abcbacb", output = 3
    // when it reaches the second 'a', startIndex is ahead of rightChar, at 'b'
    expect(longest_substring_with_distinct_characters_quokka(input)).toBe(output)
  });

})





