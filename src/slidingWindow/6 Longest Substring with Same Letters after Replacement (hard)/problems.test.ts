
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

// const length_of_longest_substring_same = (input: string, k: number) => {
//   let windowStart = 0, windowEnd = 0;
//   let maxRepeatCount = 0, max = 0;
//   let letterMap: Record<string, number> = {}

//   for (windowEnd = 0; windowEnd < input.length; windowEnd++) {
//     let rightChar = input[windowEnd]
//     if (!letterMap[rightChar]) {
//       letterMap[rightChar] = 1
//     }else{
//       // add one count to the frequency
//       letterMap[rightChar] = letterMap[rightChar] + 1
//     }

//     maxRepeatCount = Math.max(maxRepeatCount, letterMap[rightChar]) // maxRepeat = 2 at `bccbb`

//     const currWindowSize = (windowEnd - windowStart) + 1
//     const remainingLetters = currWindowSize - maxRepeatCount // aabccbb at `bccbb` -> remainingLetters = 

//     // too many remaining letters, should shrink the window
//     if (remainingLetters > k) {
//       const leftChar = input[windowStart]
//       letterMap[leftChar] = letterMap[leftChar] - 1 // reduce the frequency of the leftChar
//       windowStart++
//     }else{
//       // remaining letters <= k, meaning we can replace the rest of the letters
//     }

//     const finalWindowSize = (windowEnd - windowStart) + 1
//     max = Math.max(max, finalWindowSize)
//   }

//   return max
// }


describe("length_of_longest_substring_same", () => {
  it("input = 'aabccbb', k = 2, output = 5;", () => {
    const input = "aabccbb", k = 2, output = 3;
    expect(length_of_longest_substring_same(input, k)).toBe(output)
  });

  it("input = 'abbcb', k = 1, output = 4;", () => {
    const input = "abbcb", k = 1, output = 4;
    expect(length_of_longest_substring_same(input, k)).toBe(output)
  });

  it("input = 'abccde', k = 1, output = 3;", () => {
    const input = "abccde", k = 1, output = 3;
    expect(length_of_longest_substring_same(input, k)).toBe(output)
  });
})